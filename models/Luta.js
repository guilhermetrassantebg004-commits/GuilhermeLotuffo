import conexao from "../config/conexao.js";

const LutaSchema = conexao.Schema({
    lutadores:{type:String, required:true},
    catgpeso:{type:String, required:true},
    juiz:{type:String, required:true}
})
const Luta = conexao.model("Luta", LutaSchema);
export default Luta