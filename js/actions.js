window.OurGame.stressup = function(people) {
  var People = [];
  for (var i = 0; i < people; i++) {
    People.push($('#{p'+i+'}').html(parseInt($('#{p'+i+'}').html())+1))
  }
  return stesscycle = window.setInterval(stressup, 2000)
}
