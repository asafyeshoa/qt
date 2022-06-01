const puppeteer = require('puppeteer')
const questionsModel = require('../models/questions')


const runScrap = async (req, res) => {
    let browser;
    try {
        const searchQuery = req.body.query;

        const docs = await questionsModel.find()
        docs.forEach(doc => {
            if(doc.search === searchQuery) {
                res.send("Search is exists")
            }
        })

        browser = await puppeteer.launch();
        const [page] = await browser.pages();


        await page.goto("https://www.google.com/?hl=en", {waitUntil: "domcontentloaded"});
        await page.waitForSelector('input[aria-label="Search"]', {visible: true});
        await page.type('input[aria-label="Search"]', searchQuery);
        await Promise.all([
            page.waitForNavigation(),
            page.keyboard.press("Enter"),
        ]);

        try {
            await page.waitForSelector(".r21Kzd", {visible: true});
        } catch (err) {
            res.send('Information not found')
        }

        await page.click('.r21Kzd')
        await page.waitForTimeout(1000)
        const data = []
        const questions = await page.$$eval(".wQiwMc", els => els.map(e => ({question: e.innerText})));
        const answers = await page.$$eval('.LGOjhe', els => (els.map(e => ({answer: e.innerText}))))


        const tmp = [...questions[0].question.split("\n")]
        answers.unshift({answer: tmp[1]})
        questions[0].question = tmp[0]


        for (let i = 0; i < questions.length; i++) {
            data.push({
                question: questions[i].question,
                answer: answers[i].answer
            })
        }

        const result =  await questionsModel.create({
            data,
            search: searchQuery
        })

        const payload = [...docs, result]

        res.send(payload)
    } catch (err) {
        console.log(err)
    } finally {
        browser?.close()
    }


}

const getScraps = async (req, res) => {
   const docs = await questionsModel.find()
    res.send(docs)
}

module.exports = {
    runScrap, getScraps
}
