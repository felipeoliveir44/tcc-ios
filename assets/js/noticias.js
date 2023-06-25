const btnVerMais = document.getElementById("btn-vermais");
const conteudoAdicional = document.getElementsByClassName("mais-conteudo");

btnVerMais.addEventListener("click", function() {
  if (btnVerMais.innerHTML === "Mais") {
    for (let i = 0; i < conteudoAdicional.length; i++) {
      conteudoAdicional[i].style.display = "block";
    }
    btnVerMais.innerHTML = "Menos";
  } else {
    for (let i = 0; i < conteudoAdicional.length; i++) {
      conteudoAdicional[i].style.display = "none";
    }
    btnVerMais.innerHTML = "Mais";
  }
});

feather.replace();

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

