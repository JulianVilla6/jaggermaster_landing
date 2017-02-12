$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


$(window).scroll(function() {

    if ($(this).scrollTop()>300)
     {
        $('.anchorLink').fadeOut(500);
          $('.anchorLink2').fadeIn(1000);
     }
    else
     {
      $('.anchorLink').fadeIn(1000);
      $('.anchorLink2').fadeOut(500);
     }
 });
