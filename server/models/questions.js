const mongoose = require('mongoose')


const QuestionsSchema = mongoose.Schema(
    {
        data: {type: Array},
        search: {type: String}
    }
)


const Questions = mongoose.model("Questions", QuestionsSchema)

module.exports = Questions
