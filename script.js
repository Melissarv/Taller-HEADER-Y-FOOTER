$(document).ready(function(){
  // Activador de Slick Slider
  $('.slick-banner').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplaySpeed: 12000,
      speed: 700,
      infinite: true,
      arrows: true
  });
});

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

$(document).ready(function(){

  // Activación de transición del menú principal
  $('aside#menu-hamburguesa nav a, header article nav a').bind('click',function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000,'easeOutExpo');
      event.preventDefault();
  });


  
  // Abrir y cerrar Menú Hamburguesa
  $('#abrir').click(function(){
      $('aside#menu-hamburguesa').animate({
          left: 0
      },300,'easeOutExpo');

      $('#abrir').hide();
      $('#cerrar').show();

      event.preventDefault();
  });

  $('#cerrar, aside#menu-hamburguesa nav a').click(function(){
      $('aside#menu-hamburguesa').animate({
          left: -290
      },300,'easeOutExpo');

      $('#abrir').show();
      $('#cerrar').hide();

      event.preventDefault();
  });
});
