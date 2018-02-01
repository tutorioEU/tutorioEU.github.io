var header = $('#graph-container');
var range = 200;

$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css('opacity', calc);

  if (calc > '0.6') {
    header.css('opacity', 1);
    $('header').css('background-color','transparent');
  } else if ( calc < '0' ) {
    header.css('opacity', 0);
    $('header').css('background-color','#373845');
  }

});
