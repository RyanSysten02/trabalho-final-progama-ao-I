import motocad from "../modulos/inscricaocad.js";
import Conectar from "./conexao.js";


export default class cad_motorista{
    async gravar(motorista){
        if(motorista instanceof motocad){
        const conexao = await Conectar();
        const sql = `INSERT INTO inscricao( nome, cpf, cnh, dnasc) VALUES(?, ?, ?, ?)`;
        const parametros = [motorista.nome, motorista.cpf, motorista.cnh, motorista.dnasc];
        const resultado = await conexao.query(sql,parametros);
        motorista.idmotoristas = resultado[0].insertId;
        global.poolconexoes.releaseConnection(conexao);
    }
    }
    async atualizar(motorista){
        if(motorista instanceof motocad){
        const conexao = await Conectar();
        const sql = `UPDATE inscricao Set nome = ?, cpf = ?, cnh = ? , dnasc = ? WHERE id = ?`;
        const parametros = [motorista.nome, motorista.cpf, motorista.cnh, motorista.dnasc, motorista.id];
        const resultado = await conexao.query(sql,parametros);
        global.poolconexoes.releaseConnection(conexao);
    }
    }
    async excluir(id){
        if(id instanceof motocad){
        const conexao = await Conectar();
        const sql = 'DELETE FROM inscricao WHERE id = ?';
        const parametros = [id.id];
        const resultado = await conexao.query(sql,parametros);
        global.poolconexoes.releaseConnection(conexao);
    }
    }
    async consultar(){
        let listamotoristas = [];
        const conexao = await Conectar();
        const sql = 'SELECT * FROM inscricao order by id';
        const[rows, fields] = await conexao.query(sql)
        for (const registro of rows){
            const motoristas = new motocad(registro.id ,registro.nome, registro.cpf, registro.cnh, registro.dnasc);
            listamotoristas.push(motoristas);
        }
            
        return listamotoristas;
        
        }
        async consultarmotorista(nome, dnasc) {
            try {
                const conexao = await Conectar();
                const sql = 'SELECT * FROM inscricao WHERE nome = ? AND dnasc = ?';
                const [rows, fields] = await conexao.query(sql, [nome, dnasc]);
        
                if (rows.length > 0) {
                    const motoristaentrado = rows[0];
                    return motoristaentrado;
                } else {
                    return null;
                }
            } 
            
            catch (error) {
                console.error('Erro ao consultar motorista:', error);
                throw error; 
            } 
            
            finally {
                conexao.end();
            }
        }
    
        
}

