$(document).ready(function () {
    $('.deslizante-maior').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      accessibility: true, /*navegação por tabulação e tecla de seta*/
      autoplay: true,      /*reprodução automática*/
      autoplaySpeed: 3000  /*Velocidade dA reprodução automática em milissegundos, o padrão é 3000*/ 
    });
    $('.deslizante-menor').slick({
      accessibility: true, /*navegação por tabulação e tecla de seta*/
      autoplay: true,      /*reprodução automática*/
      autoplaySpeed: 3000  /*Velocidade dA reprodução automática em milissegundos, o padrão é 3000*/ 
    });
  });