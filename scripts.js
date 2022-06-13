function selecionadorprato(element) {
    
   const pratoselecionado = document.querySelector(".selecionado");
   if (pratoselecionado !== null){
      pratoselecionado.classList.remove("selecionado");
   }
   element.classList.add("selecionado");
}
function ativariconeok(element) {

   const ativaok = document.querySelector("prato .none");
   if(ativaok !== null){
      ativaok.classList.remove("none");
   }
   element.querySelector(".ok").classList.add("none");

}
function selecionadorbebida(element) {
    
   const bebidaselecionada = document.querySelector(".bebidas .selecionado");
   if (bebidaselecionada !== null){
      bebidaselecionada.classList.remove("selecionado"); 
   }
   element.classList.add("selecionado");
}
function selecionadorsobremesa(element) {
    
   const doceselecionado = document.querySelector(".sobremesas .selecionado");
   if (doceselecionado !== null){
      doceselecionado.classList.remove("selecionado");
   }
   element.classList.add("selecionado");
}