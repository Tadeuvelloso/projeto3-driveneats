
let cont = 0;



function selecionadorprato(element) {
   let nomeprato = element.innerHTML;
   const pratoselecionado = document.querySelector(".selecionado");
   if (pratoselecionado !== null){
      pratoselecionado.classList.remove("selecionado");
      cont-=1;
   }
   element.classList.add("selecionado");
   cont+=1;
   fecharpedido()
}

function selecionadorbebida(element) {
   let nomebebida = element.innerHTML;
   const bebidaselecionada = document.querySelector(".bebidas .selecionado");
   if (bebidaselecionada !== null){
      bebidaselecionada.classList.remove("selecionado");
      cont-=1;
   }
   element.classList.add("selecionado");
   cont+=1;
   fecharpedido()
}
function selecionadorsobremesa(element) {
   let nomesobremesa = element.innerHTML;
   
   const doceselecionado = document.querySelector(".sobremesas .selecionado");
   if (doceselecionado !== null){
      doceselecionado.classList.remove("selecionado");
      cont-=1;
   }
   element.classList.add("selecionado");
   cont+=1;
   fecharpedido()
}

function fecharpedido(){

   const ativador = document.querySelector(".confirma-botao");
   if (cont === 3){
      ativador.classList.add("pedidofinalizado");
      ativador.innerHTML = "Fechar Pedido"
   }
}

function whatsapp(){
   const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim\n Total: R$ 27,70 `
   
   if (cont === 3){
      location.href="https://wa.me/?text=" + encodeURIComponent(mensagem)
   }
}


