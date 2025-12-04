import conexao from "../config/conexao.js";

const LutadoresSchema = conexao.Schema({
    nome:{type:String, required:true},
    catgpeso:{type:String, required:true},
    nacionalidade:{type:String, required:true},
    cartel:{type:String, required:true},
    foto:{type:Buffer}
})
const Lutadores = conexao.model("Lutadores", LutadoresSchema)
export default Lutadores