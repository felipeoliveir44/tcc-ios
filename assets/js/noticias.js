feather.replace();

const btnVerMais = document.getElementById("btn-vermais");
const conteudoAdicional = document.getElementsByClassName("mais-conteudo");

btnVerMais.addEventListener("click", function () {
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




/* Icon feather */