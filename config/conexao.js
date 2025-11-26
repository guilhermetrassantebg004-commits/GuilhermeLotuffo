import mongoose from "mongoose";
const url = 
"mongodb+srv://guilhermetrassantebg:biPrOcivWGkmc0dv@maoii.tuikubz.mongodb.net/?retryWrites=true&w=majority&appName=maoii"
const conexao = await mongoose.connect(url)
export default conexao