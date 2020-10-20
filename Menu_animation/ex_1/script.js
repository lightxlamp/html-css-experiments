
// drop down the menu, and swap the icon to the close icon
$('.menu').click(function(){
    $(this).toggleClass('icon-menu');
    $(this).toggleClass('icon-cross');
    $('nav').toggleClass('down');
    $('nav li a').removeClass('down');
    $('.search').removeClass('down');
    $('.icon-search').removeClass('icon-cross');
  });
  
  //Make sure the menu icon behaves corectly when the menu is open
  $('nav li a').click(function(){
      $('.menu').addClass('icon-menu');
      $('.menu').removeClass('icon-cross');
      $('nav').toggleClass('down');
  });
  
  //show and hide the search bar, also make sure if the menu is open to hide the menu, and ensure the menu icon state is correct
  $('.icon-search').click(function(){
      $(this).toggleClass('icon-cross');
      $('.menu').addClass('icon-menu');
      $('.menu').removeClass('icon-cross');
      $('.search').toggleClass('down');
      $('nav').removeClass('down');
  });   