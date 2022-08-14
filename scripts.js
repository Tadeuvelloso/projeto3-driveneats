let nomePrato;
let valorPrato;
let nomeBebida;
let valorBebida;
let nomeDoce;
let valorDoce;
let total;
cont = 0;

function escolhaPrato (elemento) {
    
    const verde = document.querySelector('.pratos .selecionado');
    
    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --;
    }
    
    elemento.classList.add('selecionado');
    cont ++;
    
    const nomePrato = document.querySelector(".prato .nome-item").innerHTML;
    const valorPrato = document.querySelector(".prato .valor").innerHTML;
    console.log(nomePrato);
    console.log(valorPrato);
    pedidoFinalizado ();
}

function escolhaBebida (elemento) {
    
    const verde = document.querySelector('.bebidas .selecionado');
    const nomeBebida = document.querySelector(".bebida .nome-item").innerHTML;
    const valorBebida = document.querySelector(".bebida .valor").innerHTML;

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

function escolhaDoce (elemento) {
    
    const verde = document.querySelector('.doces .selecionado');

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
    const painel = document.querySelector(".confirma");
    painel.classList.remove("escondido");
}

function cancelar () {
    const botao = document.querySelector(".confirma");
    botao.classList.add("escondido");
    
}