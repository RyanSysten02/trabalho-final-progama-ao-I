import { Router } from "express";
import motolog from "../controle//controlInscricao.js";


const rotamoto = new Router();
const loguser = new motolog();

 rotamoto.get('/',loguser.consultar)
.post('/',loguser.gravar)
.put('/',loguser.atualizar)
.patch('/',loguser.atualizar)
.delete('/',loguser.excluir);
export default rotamoto;



