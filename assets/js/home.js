// Busca todos os elementos com a classe
const slides = document.querySelectorAll('.slide');
// Busca o botão de avançar
const next = document.querySelector('#next');
// Busca o botão de retroceder
const prev = document.querySelector('#prev');
// Habilita ou desabilita a transição automática entre slides
const auto = false; // Auto scroll
// Intervalo entre transições
const intervalTime = 2000;
// Tempo para exibir o slide na transição automática
let slideInterval;

const nextSlide = () => {
    // Busca o slide com a classe atual
    const atual = document.querySelector('.atual');
    // Remove a classe atual do slide
    atual.classList.remove('atual');
    // Verifica ser existe o próximo slide
    if (atual.nextElementSibling) {
        // Adiciona a classe atual no próximo slide
        atual.nextElementSibling.classList.add('atual');
    } else {
        // Adiciona a classe atual no primeiro slide
        slides[0].classList.add('atual');
    }
    setTimeout(() => atual.classList.remove('atual'));
};

const prevSlide = () => {
    // Busca o slide com a classe atual
    const atual = document.querySelector('.atual');
    // Remove a classe atual do slide
    atual.classList.remove('atual');
    // Verifica ser existe o slide anterior
    if (atual.previousElementSibling) {
        // Adiciona a classe atual no slide anterior
        atual.previousElementSibling.classList.add('atual');
    } else {
        // Adiciona a classe atual no último slide
        slides[slides.length - 1].classList.add('atual');
    }
    setTimeout(() => atual.classList.remove('atual'));
};

next.addEventListener('click', (e) => {
    nextSlide(); // Invoca a função próximo slide
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', (e) => {
    prevSlide(); // Invoca a função slide anterior
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    // Mostra o próximo slide automaticamente depois de um tempo
    slideInterval = setInterval(nextSlide, intervalTime);
}