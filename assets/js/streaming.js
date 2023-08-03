document.addEventListener('DOMContentLoaded', function () {
  var splide1 = new Splide('#slider1', {
    perPage: 1,
    pagination: true,
    perMove: 1,
  });

  var splide2 = new Splide('#slider2', {
    perPage: 5,
    pagination: false,
    perMove: 1,
    type: 'loop',
    padding: '1rem',

    breakpoints: {
      500: {
        perPage: 1,
      },
      // Define o número de slides por página para diferentes tamanhos de tela
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      }
    }
  });

  var splide3 = new Splide('#slider3', {
    perPage: 5,
    pagination: false,
    perMove: 1,
    type: 'loop',
    padding: '1rem',
    breakpoints: {
      500: {
        perPage: 1,
      },
      // Define o número de slides por página para diferentes tamanhos de tela
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      }
    }
  });

  var splide4 = new Splide('#slider4', {
    perPage: 5,
    pagination: false,
    perMove: 1,
    type: 'loop',
    padding: '1rem',
    breakpoints: {
      500: {
        perPage: 1,
      },
      // Define o número de slides por página para diferentes tamanhos de tela
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      }
    }
  });

  var splide5 = new Splide('#slider5', {
    perPage: 5,
    pagination: false,
    perMove: 1,
    type: 'loop',
    padding: '1rem',
    breakpoints: {
      500: {
        perPage: 1,
      },
      // Define o número de slides por página para diferentes tamanhos de tela
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      }
    }
  });

  splide1.mount();
  splide2.mount();
  splide3.mount();
  splide4.mount();
  splide5.mount();
});