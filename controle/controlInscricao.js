import motocad from "../modulos/inscricaocad.js"
export default class motolog{
    gravar(requisicao, resposta){
        resposta.type('aplication/json')
        if(requisicao.method ==='POST'){
            const dados = requisicao.body
            const nome = dados.nome
            const cpf = dados.cpf
            const cnh = dados.cnh
            const dnasc = dados.dnasc
            if(nome && cpf && cnh && dnasc ){
                const motorista = new motocad(0,nome, cpf, cnh, dnasc);
                motorista.gravar().then(() => {
                    resposta.json({
                        status:true,
                        mensagem:"Cadastrado com sucesso"
                    })
                }).catch((erro) => {
                    resposta.json({
                        status:false,
                        mensagem:"Não foi posivel adicionar :" + erro.message
                })
                })
            }
            else{
                resposta.json({
                        status:false,
                        mensagem:"preencha todos os campos corretamente"
                })
            }
            
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Metodo HTTP invalido"
        })
        }

    }
    

    atualizar(requisicao, resposta){
        resposta.type('aplication/json')
        if(requisicao.method ==='PUT' || requisicao.method ==='PATCH' ){
            const dados = requisicao.body
            const id = dados.id
            const nome = dados.nome
            const cpf = dados.cpf
            const cnh = dados.cnh
            const dnasc = dados.dnasc
            if(id && nome && cpf && cnh && dnasc ){
                const motorista = new motocad(id, nome, cpf, cnh, dnasc);
                motorista.atualizar().then(() => {
                    resposta.json({
                        status:true,
                        mensagem:" atualizado com sucesso"
                    })
                }).catch((erro) => {
                    resposta.json({
                        status:false,
                        mensagem:"nao foi posivel atualizar:" + erro.message
                })
                })
            }
            else{
                resposta.json({
                        status:false,
                        mensagem:"preencha todos os campos corretamente"
                })
            }
            
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Metodo HTTP invalido"
        })
        }

    }
    excluir(requisicao, resposta){
        { resposta.type('aplication/json')
            if(requisicao.method ==='DELETE' ){
                const dados = requisicao.body
                const id = dados.id
                if(id){
                    const motorista = new motocad(id);
                    motorista.excluir().then(() => {
                        resposta.json({
                            status:true,
                            mensagem:"excluido com sucesso!"
                        })
                    }).catch((erro) => {
                        resposta.json({
                            status:false,
                            mensagem:"Não foi posivel excluir :" + erro.message
                    })
                    })
                }
                else{
                    resposta.json({
                            status:false,
                            mensagem:"preencha todos os campos corretamente"
                    })
                }
                
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Metodo HTTP invalido"
            })
            }
        }

    }
    consultar(requisicao, resposta){    
         resposta.type('aplication/json')
            if(requisicao.method ==='GET'  ){
                const motorista = new motocad();
                motorista.consultar().then((listcadastros) => {
                        resposta.json(listcadastros)
                    }).catch((erro) => {
                        resposta.json({
                            status:false,
                            mensagem:"nao foi posivel buscar:" + erro.message
                    })                  })
                }    
            else{
                resposta.json({
                    status:false,
                    mensagem:"Metodo HTTP invalido"
                    })      
    
                }
        
    
    }
}
