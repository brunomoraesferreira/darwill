(function() {
  
  var slideContainer = $('#deslizante-aprendizado');
  
  slideContainer.slick();
  
  $('.card__imagem img').hide();
  $('.slick-active').find('.card__involucro img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.card__involucro img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.card__involucro img').fadeIn(200);
  });
  
})();