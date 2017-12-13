function changeColorClass(elem) {
  if (elem.hasClass('dot-color-1')) {
    elem.removeClass('dot-color-1').addClass('dot-color-3');
    return 0;
  }
  if (elem.hasClass('dot-color-2')) {
    elem.removeClass('dot-color-2').addClass('dot-color-1');
    return 0;
  }
  if (elem.hasClass('dot-color-3')) {
    elem.removeClass('dot-color-3').addClass('dot-color-2');
    return 0;
  }
}

function changeDotColor() {
  var first = $('.dot').first()
  changeColorClass(first)
  changeColorClass(first.next())
  changeColorClass(first.next().next())
}

$(document).ready(function(){
    setInterval(changeDotColor,300)
});
