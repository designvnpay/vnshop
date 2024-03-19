//====================ACCORDANCE INIT=================//
$(document).ready(function () {
   $('[data-content]').on('change', function () {
      $(this).closest('[data-accordion]').trigger('resize');
   })
   $('[data-accordion]').accordion({
      "transitionSpeed": 200
   });
   $('[data-accordion]').trigger('resize');
   $('.sticky-menu [data-accordion]').on('accordion.close', function () {
      setTimeout(function () {
         $(window).trigger('resize');
      }, 10)

   });
   $('[data-accordion]').on('accordion.close', function () {
      $(this).removeClass('open-init')
   });
   $('.background-overlay').on('click', function() {
      $('.box-accordion [data-control]').trigger('click');
      $('.background-overlay').removeClass('show');    
  });
  $('.box-accordion').on('click', function() {
      $('.background-overlay').addClass('show');
  
  });
});
//====================END ACCORDANCE INIT=================//