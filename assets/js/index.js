const form = document.getElementsByClassName("form-assinar");
const opcoes = document.getElementById("metodo_pagamento");
const divDebito = document.querySelector(".debito");
const divPix = document.querySelector(".pix")

opcoes.addEventListener("change", function () {
    const opcaoSelecionada = opcoes.value;
    
    if(opcaoSelecionada === 'debito_automatico') {
        divDebito.style.display = "block";
        divPix.style.display = "none";
    }
    else if(opcaoSelecionada === 'pix') {
        divDebito.style.display = "none";
        divPix.style.display = "block";
    }
    else {
        divDebito.style.display = "none";
        divPix.style.display = "none";
    }

})