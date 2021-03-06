$(document).ready(function(){
  $('#nav-switcher').click(toggleNavigation);
  var bigScreen = window.matchMedia("(min-width: 1025px)")
  bigScreen.addListener(() => {$('#navigation').css('display','flex');
                               toggleImg();
                             });
});

$(window).on('scroll', function () {
  var header = $('#graph-container');
  var logo = $('#logo');
  var range = 200;
  var fading = (window.matchMedia("(min-width: 1025px)").matches) ? false : true;
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css('opacity', calc);
  if (fading) {
    logo.css('opacity', 1 - calc);
  }
  if (calc > '0.6') {
    header.css('opacity', 1);
    if (fading) {
      logo.css('opacity', 0);
    }
    $('header').css('background-color','transparent');

  } else if ( calc < '0' ) {
    header.css('opacity', 0);
    if (fading) {
      logo.css('opacity', 1);
    }
    if ($('#navigation').css('display') == 'flex') {
        $('header').css('background-color','rgba(55,56,69,1)');
    } else {
        $('header').css('background-color','rgba(55,56,69,0.8)');
    }

  }

});

function toggleNavigation() {
  var nav = $('#navigation')
  var header = $('header')
  if (nav.css('display') == 'none') {
       nav.slideDown( 700 ).css('display', 'flex');
       header.css('background-color', 'rgba(55,56,69,1)');
  } else {
       nav.slideUp( 700 );
       header.css('background-color','rgba(55,56,69,0.8');
     }
  toggleImg();
}

function toggleImg(){
  var img = $('.closed-img')
  img.animate({ opacity: 0 }, 500,function(){
          img.toggleClass('open');
          img.animate({ opacity: 1 }, 400,function(){});
  });
}
