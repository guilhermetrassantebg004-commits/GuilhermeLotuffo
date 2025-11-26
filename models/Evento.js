import conexao from "../config/conexao.js";

const EventoSchema = conexao.Schema({
    nomeeven:{type:String, required:true},
    organizador:{type:String, required:true},
    patrocinadores:{type:String, required:true},
    local:{type:String, required:true},
    data:{type:Date, required:true}
})
const Evento = conexao.model("Evento", EventoSchema);
export default Evento