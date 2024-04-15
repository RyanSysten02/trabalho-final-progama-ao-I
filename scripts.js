
document.addEventListener('DOMContentLoaded', function () {
  habilitarBotoes();
});


const btncadastrar = document.getElementById('btncadastrar');
const btnatualizar = document.getElementById('btnatualizar');
const btnexcluir = document.getElementById('btnexcluir');
const btnconfirmar = document.getElementById('btnconfirmar');
const btncancelar = document.getElementById('btncancelar');
let form = document.getElementById('register-form');
let acao = 'padrao';
buscauser();

btncadastrar.onclick = () => {
  acao = 'cadastrar';
  habilitarBotoes();
};

btnatualizar.onclick = () => {
  acao = 'atualizar';
  habilitarBotoes();
};

btnexcluir.onclick = () => {
  acao = 'excluir';
  habilitarBotoes();
};

btnconfirmar.onclick = () => {
  cadastraruser(form);;
  limpaform()
  habilitarBotoes();
};

btncancelar.onclick = () => {
  limpaform(); 
  acao = 'padrao';
  habilitarBotoes();
};


function habilitarBotoes() {
  if (acao === 'cadastrar' || acao === 'atualizar' || acao === 'excluir') {
      btncadastrar.disabled = true;
      btnatualizar.disabled = true;
      btnexcluir.disabled = true;
      btnconfirmar.disabled = false;
      btncancelar.disabled = false;
  } else {
      btncadastrar.disabled = false;
      btnatualizar.disabled = false;
      btnexcluir.disabled = false;
      btnconfirmar.disabled = true;
      btncancelar.disabled = true;
  }
}


function limpaform(){
  const form1 = document.getElementById('register-form');
  form1.reset();
}


function cadastraruser() {
  const email = document.getElementById('email').value;
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:4000/protegido', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:email,
      nome:nome,
      sobrenome:sobrenome,
      senha:senha,
    })
  }).then((resposta) => {
    return resposta.json();
  }).then((dados) => {
    if (dados.status){
      msnerro(dados.mensagem);
      habilitarBotoes();
    } else {
      msnerro(dados.mensagem);
      habilitarBotoes();
    }
  }).catch((erro) => {
    msnerro('Falha ao cadastrar:' + erro.message);
  });

  function msnerro(msg) {
    const divMensagem = document.getElementById('mensagem');
    divMensagem.innerHTML = msg;
    setTimeout(() => {
      divMensagem.innerHTML = '';
    }, 10000);
  }
}

function buscauser(){
  fetch('http://localhost:4000/protegido',
    method="GET").then((resposta)=>{
      return resposta.json();
    }).then((dados)=>{
      if(Array.isArray(dados)){
        if(dados.length > 0){
            let divtablea = document.getElementById('tabela');
            divtablea.innerHTML = '';
            let tabela = document.createElement('table');
            tabela.classList.add('table table-striped table-hover');
            let cabeçario = document.createElement('thead');
            let corpo = document.createElement('tbody');
            cabeçario.innerHTML = `<tr> 
                                      <th>id</th> 
                                      <th>email</th>
                                      <th>nome</th>
                                      <th>sobrenome</th>
                                      <th>senha</th>
                                      <th>açao</th>
                                  </tr>`
            tabela.appendChild(cabeçario);
              for(const cadastros of dados){
                  let linhatabela = document.createElement('tr');
                  linhatabela.innerHTML= `<td>${usuario.id}</td>
                                          <td>${usuario.email}</td>
                                          <td>${usuario.nome}</td>
                                          <td>${usuario.sobrenome}</td>
                                          <td>${usuario.senha}</td>
                                          <td><button class"btn btn-light btn-sm">Selecionar</button></td>`
             corpo.appendChild(linhatabela);          
            
            };
            tabela.appendChild(corpo);
            divtablea.appendChild(tabela);
          }
        
        else
        msnerro('nemhum cadastro encontrado' + erro.message);
      }
      else{
        msnerro('erro ao buscar' + erro.message);
      }
     
    }).catch((erro)=>{
      msnerro('erro ao buscar' + erro.message);
    });
    

}