let nomePrato;
let valorPrato;
let nomeBebida;
let valorBebida;
let nomeDoce;
let valorDoce;
let total;
let nome;
let endereco;
cont = 0;

function escolhaPrato (elemento) {
    
    const verde = document.querySelector('.pratos .selecionado');
    
    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --;
    }
    
    elemento.classList.add('selecionado');
    cont ++;
    
    nomePrato = elemento.querySelector(".prato .nome-item").innerHTML;
    valorPrato = elemento.querySelector(".prato .valor").innerHTML;
    console.log(nomePrato);
    console.log(valorPrato);
    pedidoFinalizado ();
}

function escolhaBebida (elemento) {
    
    const verde = document.querySelector('.bebidas .selecionado');
    nomeBebida = elemento.querySelector(".bebida .nome-item").innerHTML;
    valorBebida = elemento.querySelector(".bebida .valor").innerHTML;

    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --
    }
     
    elemento.classList.add('selecionado');
    cont ++;

  
    console.log(nomeBebida);
    console.log(valorBebida);
    pedidoFinalizado ()
}
escolhaPrato();
escolhaBebida();
escolhaDoce();

function escolhaDoce (elemento) {
    
    const verde = document.querySelector('.doces .selecionado');
    nomeDoce = elemento.querySelector(".doce .nome-item").innerHTML;
    valorDoce = elemento.querySelector(".doce .valor").innerHTML;
    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --;
    }
     
    elemento.classList.add('selecionado');
    cont ++
    pedidoFinalizado ()
}


function pedidoFinalizado (){
    if (cont === 3){
    const final = document.querySelector(".finalizar");
    final.innerHTML = "Finalizar Pedido"
    final.classList.add("verdinho");
    
    }
}

function confirmaPedido(){
    nome = prompt("[Digite seu Nome]:");
    endereco = prompt("[Digite seu endereço]:");


    const painel = document.querySelector(".confirma");
    painel.classList.remove("escondido");

    total = Number(valorBebida) + Number(valorPrato) + Number(valorDoce);

    const infos = document.querySelector(".confirma .mensagem");
    infos.innerHTML =
    `<h4>Olá, gostaria de fazer o pedido:</h4>
    <br>
    <p>-Prato:         ${nomePrato}</p>
    <p>-Bebida:        ${nomeBebida}</p>
    <p>-Sobremesa:     ${nomeDoce}</p>
    <p>Total:           R$ ${total.toFixed(2)}</p>
    <br>
    <div>
    <p>Nome: ${nome}</p>
    <p>Endereço: ${endereco}</p>
    </div>
    `;
    

}

confirmaPedido();

function whatsapp (){
    let mensagem = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeDoce}
    Total: R$ ${total.toFixed(2)}

    Nome: ${nome}
    endereço: ${endereco}`;
    
    mensagem = encodeURIComponent(mensagem);

    let enviamensagem = `https://wa.me/999999999?text=${mensagem}`;
    
    window.open(enviamensagem);
}

function cancelar () {
    const botao = document.querySelector(".confirma");
    botao.classList.add("escondido");
    
}