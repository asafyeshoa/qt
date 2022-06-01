const express = require("express");
const scrapController = require("../controllers/scraping")

const router = express.Router()


router.post("/sendQuery", scrapController.runScrap)

router.get('/getData', scrapController.getScraps)


module.exports = router
