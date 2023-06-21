
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
  dots[slideIndex - 1].className += " active";
}

// Chamar a função showSlides automaticamente a cada 5 segundos
setInterval(function() {
  plusSlides(1);
}, 5000);

/* Icon feather */
feather.replace();

/* home */

let inscritos = [];

function incluirInscrito() {
    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('dataNasc').value;
    let email = document.getElementById('email').value;

    // Verifica se é maior de 18 anos
    let dataNascArray = dataNasc.split('/');
    let dataNascFormatada = new Date(dataNascArray[2], dataNascArray[1] - 1, dataNascArray[0]);
    let idade = calcularIdade(dataNascFormatada);
    if (idade < 18) {
        alert('É necessário ter 18 anos ou mais para se inscrever.');
        return;
    }

    // Verifica se o email é válido usando uma expressão regular (RegEx)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('O email informado é inválido.');
        return;
    }

    // Adiciona o inscrito à lista
    inscritos.push({ nome, dataNasc, email });
    exibirInscritos();
    limparCampos();
}

function excluirInscrito() {
    let item = document.getElementById('item').value;
    let index = parseInt(item) - 1;

    if (index >= 0 && index < inscritos.length) {
        inscritos.splice(index, 1);
        exibirInscritos();
        limparCampos();
    } else {
        alert('O item informado não corresponde a um inscrito válido.');
    }
}

function exibirInscritos() {
    let listaInscritos = document.getElementById('inscritos');
    listaInscritos.innerHTML = '';

    for (let i = 0; i < inscritos.length; i++) {
        let inscrito = inscritos[i];
        let item = i + 1;
        let li = document.createElement('li');
        li.textContent = item + '. ' + inscrito.nome + ' - ' + inscrito.dataNasc + ' - ' + inscrito.email;
        listaInscritos.appendChild(li);
    }
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('dataNasc').value = '';
    document.getElementById('email').value = '';
    document.getElementById('item').value = '';
}

function calcularIdade(dataNasc) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    return idade;
}
