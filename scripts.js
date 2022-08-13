
function escolhaPrato (elemento) {
    
    const verde = document.querySelector('.pratos .selecionado');

    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --;
    }
     
    elemento.classList.add('selecionado');
    cont ++;
    pedidoFinalizado ()
}

function escolhaBebida (elemento) {
    
    const verde = document.querySelector('.bebidas .selecionado');

    if (verde !== null){
        verde.classList.remove('selecionado');
        cont --
    }
     
    elemento.classList.add('selecionado');
    cont ++;
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

cont = 0;
function pedidoFinalizado (){
    if (cont === 3){
    const final = document.querySelector(".finalizar");
    final.innerHTML = "Finalizar Pedido"
    final.classList.add("verdinho");
    }
}