const form = document.getElementsByClassName("form-assinar");
const opcoes = document.getElementById("metodo_pagamento");
const divDebito = document.querySelector(".debito");
const divCredito = document.querySelector("#credito");
const divPix = document.querySelector(".pix");
const inputCpf = document.getElementById("cpf");
inputCpf.addEventListener("input", formatarCPF);


opcoes.addEventListener("change", function () {
  const opcaoSelecionada = opcoes.value;

  divDebito.style.display = "none";
  divCredito.style.display = "none";
  divPix.style.display = "none";

  if (opcaoSelecionada === 'debito_automatico') {
    divDebito.style.display = "block";
  } else if (opcaoSelecionada === 'cartao_credito') {
    divCredito.style.display = "block";
  } else if (opcaoSelecionada === 'pix') {
    divPix.style.display = "block";
  }
});

function formatarCPF() {
  const inputCpf = document.getElementById("cpf");
  let cpf = inputCpf.value;

  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");

  inputCpf.value = cpf;

  return validarCPF(cpf);
}

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11) {
    return false;
  }

  let soma = 0;
  let resto;

  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  resto = (soma * 10) % 11;
  resto = (resto === 10 || resto === 11) ? 0 : resto;

  if (resto !== parseInt(cpf[9])) {
    return false;
  }

  soma = 0;

  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = (soma * 10) % 11;
  resto = (resto === 10 || resto === 11) ? 0 : resto;

  if (resto !== parseInt(cpf[10])) {
    return false;
  }

  return true;
}


$('#btn-enviar').click(function () {
  let nome = document.getElementById("nome").value;
  let dataNasc = document.getElementById("dataNasc").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById('senha').value;
  let notificacaoErro = document.querySelector(".popup-erro");
  let notificacaoSucesso = document.querySelector(".popup-sucesso");
  // Verifica se é maior de 18 anos
  let dataNascimento = new Date(dataNasc);
  let hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }

  // Verifica se o email e senha é válido usando RegEx
  let emailRegex = /^\S+@\S+\.\S+$/;
  let senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
  let emailValido = emailRegex.test(email);
  let senhaValida = senhaRegex.test(senha);
  let cpfValido = formatarCPF();


  if (idade >= 18 && emailValido && senhaValida && cpfValido) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    notificacaoSucesso.style.display = "block";
    setInterval(function () {
      notificacaoSucesso.style.display = "none";
      trocaPag();
    }, 2000);

  } else {
    notificacaoErro.style.display = "block";
    setTimeout(function () {
      notificacaoErro.style.display = "none"; // Esconder a mensagem de erro após 2 segundos
    }, 4500);
    
  }
});

function trocaPag() {
  window.location.href = "streaming.html";
}