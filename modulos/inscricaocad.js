import motodd from "../persistencia/inscricaoDAO.js"
export default class motocad{
    #id
    #nome  
    #cpf
    #cnh
    #dnasc
    
    constructor(id, nome, cpf, cnh, dnasc){
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#cnh = cnh;
        this.#dnasc = dnasc;

    }
    get id(){
        return this.#id;
    }
    set id(novoimotorista){
        this.#id = novoimotorista
    }
    get nome(){
            return this.#nome;
    }
    set nome(novonome){
            this.#nome = novonome;
    }

    get cpf(){
            return this.#cpf;
    }
    set cpf(novocpf){
            this.#cpf = novocpf;
    }
    
    get cnh(){
        return this.#cnh;
}
    set cnh(novocnh){
        this.#cnh = novocnh;
}
    get dnasc(){
        return this.#dnasc;
    }
    set dnasc(novadnasc){
        this.#dnasc = novadnasc;
    }
    toString(){
        const conteudo = 
        `
        {   
            id: $(this.id),
            nome: $(this#nome),
            cpf: $(this.#cpf),
            cnh: $(this.#cnh), 
            dnasc $(this.dnasc)

        }
        `;
        return conteudo;
    }
    toJSON(){
        return{
            id: this.#id,
            nome: this.#nome,
            cpf: this.#cpf,
            cnh: this.#cnh,
            dnasc: this.#dnasc,
        };
    }

    async gravar(){
      const motoridd = new motodd(); 
      await motoridd.gravar(this); 
    };
    async atualizar(){
        const motoridd = new motodd(); 
        await motoridd.atualizar(this); 
    };
    async excluir(){
        const motoridd = new motodd(); 
        await motoridd.excluir(this); 

    };
    async consultar(){
        const motoridd = new motodd(); 
        return await motoridd.consultar(); 
    };
}
