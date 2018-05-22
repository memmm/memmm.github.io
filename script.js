$(document).ready(function(){

  $('.port-item').on('click', function() {
      $(this).toggleClass('clicked');
  });

  $('.clicked').on('click', function() {
      $(this).removeClass('clicked');
  });

});
