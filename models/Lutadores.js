import conexao from "../config/conexao.js";

const LutadoresSchema = conexao.Schema({
    nome:{type:String, required:true},
    catgpeso:{type:String, required:true},
    nacionalidade:{type:String, required:true},
    cartel:{type:String, required:true},
    foto:{type:Buffer,
           get: (valor) => {
           if (!valor) return null;
            return `data:image/png;base64,${valor.toString('base64')}`;}
           }
})
const Lutadores = conexao.model("Lutadores", LutadoresSchema)
export default Lutadores