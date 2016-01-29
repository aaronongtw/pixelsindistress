$(document).ready()

var stressup = function() {
  $('#p1').html(parseInt($('#p1').html())+1)
  $('#p2').html(parseInt($('#p2').html())+1)
  $('#p3').html(parseInt($('#p3').html())+1)
  $('#p4').html(parseInt($('#p4').html())+1)
  $('#p5').html(parseInt($('#p5').html())+1)
}

stesscycle = window.setInterval(stressup, 2000)

