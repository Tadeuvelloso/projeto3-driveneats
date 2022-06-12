function selecionador(prato) {
    
    
   let pratoselecionado = document.querySelector(".selecionado");
   
   if (pratoselecionado !== null){
    pratoselecionado.classList.remove("selecionado");
   }
   pratoselecionado.classList.add("selecionado");
}