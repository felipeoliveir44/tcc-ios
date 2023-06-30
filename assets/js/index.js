
$('#btn-enviar').click(function () {
let nome = document.getElementById("nome").value;
let dataNasc = document.getElementById("dataNasc").value;
let email = document.getElementById("email").value;
let senha = document.getElementById('senha').value;
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


  if (idade >= 18 && emailValido && senhaValida) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("senha", senha);
    $.notify("Cadastro realizado!", "success");
  } else {
    $.notify("Cadastro não realizado! Tente novamente", "error");
  }
});

$('#btn-login').click(function () {
  let nomeLogin = document.getElementById("nomeLogin").value;
  let senhaLogin = document.getElementById("senhaLogin").value;
  const nomeLocal = localStorage.getItem("nome");
  const senhaLocal = localStorage.getItem("senha");
  

  if (nomeLogin === nomeLocal && senhaLogin === senhaLocal) {
    alert("Login bem-sucedido!");
    // Redireciona para a página restrita
    window.location.href = "assinaturas.html";
  } else {
    alert("Nome de usuário ou senha inválidos!");
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
}

// Chamar a função showSlides automaticamente a cada 5 segundos
setInterval(function () {
  plusSlides(1);
}, 5000);