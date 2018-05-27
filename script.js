$(document).ready(function(){



  $('.port-item').on('click', function() {
      $('.port-item').removeClass('clicked');
      $(this).addClass('clicked');
      $('.extend-port-item').toggle(500);

      var nthChild = $('.port-item').index(this);
      console.log(nthChild);
      $('.eitem').css({"display": "none"});
      switch (nthChild) {
        case 0:
          $('.first').css({"display": "flex"});
          break;
        case 1:
          $('.second').css({"display": "flex"});
          break;
        case 2:
          $('.third').css({"display": "flex"});
          break;
        case 3:
          $('.fourth').css({"display": "flex"});
          break;
      }
  });

  $('.clicked').on('click', function() {
      //$('.extend-port-item').css({"visibility": "collapse"});
      $(this).removeClass('clicked');

  });


});
