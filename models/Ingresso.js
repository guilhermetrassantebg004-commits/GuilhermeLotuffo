import conexao from "../config/conexao.js";

const IngressoSchema = conexao.Schema({
    local:{type:String, required:true},
    luta:{type:String, required:true},
    preco:{type:Number, required:true},
    assento:{type:String, required:true}
})
const Ingresso = conexao.model("Ingresso", IngressoSchema);
export default Ingresso