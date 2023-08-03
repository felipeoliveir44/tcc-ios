const form = document.getElementsByClassName("form-assinar");
const opcoes = document.getElementById("metodo_pagamento");
const divDebito = document.querySelector(".debito");
const divPix = document.querySelector(".pix")

opcoes.addEventListener("change", function () {
    const opcaoSelecionada = opcoes.value;
    
    if(opcaoSelecionada === 'debito' || opcaoSelecionada === 'cartao_credito') {
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

});

$('#btn-enviar').click(function () {
    let notificacaoDoacao = document.querySelector(".popup-doacao");
    let notificacaoErro = document.querySelector(".popup-erro");
    let email = document.getElementById("email").value;
    let emailRegex = /^\S+@\S+\.\S+$/;
    let emailValido = emailRegex.test(email);
    if (emailValido) {
        
        notificacaoDoacao.style.display = "block";
        
        setInterval(function () {
            window.location.href = "index.html";
        }, 5000);

    } else {
        notificacaoErro.style.display = "block";
        setTimeout(function () {
            notificacaoErro.style.display = "none"; // Esconder a mensagem de erro após 2 segundos
        }, 4500);
    }
    
});