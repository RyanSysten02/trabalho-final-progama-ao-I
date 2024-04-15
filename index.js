import express from "express";
import { fileURLToPath } from 'url'; // Importe a função fileURLToPath
import path from "path";
import rotamoto from "./rota/rotainscricao.js";
import cors from 'cors';

const host = '0.0.0.0';
const porta = 4000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
app.use(cors());
const __dirname = path.dirname(__filename);


app.get('/', (requisicao, resposta) => {
    resposta.redirect('/motorista/motorista.html');
});


app.use(express.json());
app.use('/motorista', rotamoto);
app.use(cors());

app.listen(porta, host, () => {
    console.log(`Servidor esperando requisições em http://${host}:${porta}`);
});
