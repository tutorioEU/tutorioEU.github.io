$(document).ready(function(){
  $('#main-h1').hide();
  $('#main-bot-conv-container').hide();
  $('#dots-container').hide();
  $('#nav-switcher').click(function(){
  if ($('.navigation').css('display') == 'none') {
       $('.navigation').slideDown( 700 ).css('display', 'flex');
     } else {
       $('.navigation').slideUp( 700 );
     }
  });
  setTimeout(hideLogo,2400);
  setTimeout(showMessanger,2800);
});

function hideLogo() {
  $('#main-logo-button').fadeOut();
}

function showMessanger() {
  $('#main-h1').fadeIn(500);
  $('#main-bot-conv-container').fadeIn(500);
  $('#dots-container').fadeIn(500);
}
