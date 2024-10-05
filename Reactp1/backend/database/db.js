const mongoose= require("mongoose");
const { number, object } = require("zod");

mongoose.connect("mongodb+srv://akash:sJazfPDF1ZOHB6C2@cluster0.ku3wj.mongodb.net/")

const todoschema = new mongoose.Schema(
    {
    title: String,
    Description : String,
    Doneby: Number,
    Completed : Boolean
    }
)

const todos = mongoose.model("Todos" , todoschema);

module.exports = {
    todos
}