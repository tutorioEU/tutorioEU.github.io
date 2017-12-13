$(document).ready(function(){
  setTimeout(blinkNeon, 300);
});

function blinkNeon() {
  blinker = setInterval(toggleNeon, 100);
  setTimeout(function() {clearInterval(blinker);}, 550);
}

function toggleNeon() {
  neon = $('#main-logo-button span a');
  neon.toggleClass('neon');
}
