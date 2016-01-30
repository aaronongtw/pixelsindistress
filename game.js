
var randomCharList = function() {
    var CharIndexList = []
    var CharList = []
    for (var i = 0; CharIndexList.length < 5; i++) {
        var indexValue = (Math.floor(Math.random() * 13) + 1)
        if (CharIndexList.indexOf(indexValue) == -1) {
            CharIndexList.push(indexValue)
            CharList.push(window.OurGame.characters[indexValue])
        }
    }
    return CharList
};

var maxTimeTicks = 180;

var gamestate = {
    dayNo: 0,
    time: 0,
    people: randomCharList(),
    activePerson: null,
    showReport: false,
};

var startNewDay = function() {
  gamestate.dayNo ++;
  gamestate.time = 0;
  gamestate.people = randomCharList();
  gamestate.activePerson = null;
  gamestate.showReport = false;

  for (var i = 0; i < gamestate.people.length; i++) {
    if (gamestate.people[i].state) {
      continue;
    }
    gamestate.people[i].state = "start";
    gamestate.people[i].stress = gamestate.people[i].startStress;
  }
};

var pickPerson = function(index) {
  gamestate.activePerson = gamestate.people[index];
  gamestate.showReport = false;

  renderScreen();
};

var personStepCallback = function(person, choice) {

  if (choice.farewell) {
    var idx = gamestate.people.indexOf(gamestate.activePerson);
    gamestate.people.splice(idx, 1);
    gamestate.activePerson = null;
    renderScreen();
    return;
  }

  var nextStep = person.conversation[choice.next];

  person.stress += nextStep.deltaStress || 0;
  person.state = choice.next;

  if (nextStep.winner) {
    nextStep.options = [{
      text: "Glad I could help. Have a nice weekend",
      farewell: true
    }];
  }

  renderScreen();
};

var popupclose =  function(){
  gamestate.activePerson = null;
  renderScreen();
};

var renderScreen = function() {
    if (gamestate.activePerson) {
        var dialog = window.OurGame.makeDialog(gamestate.activePerson, personStepCallback, popupclose);
    }
    if (!gamestate.activePerson && gamestate.showReport) {
        var dialog = window.OurGame.dayReport(gamestate, popupclose)
    }

    ReactDOM.render(
        window.OurGame.room(gamestate, gamestate.people, dialog, pickPerson),
        document.getElementById('maindiv')
    );
};


gamestate.timeToString = function(time) {
  var step = (17-9)*60 / maxTimeTicks;
  var dayTime = (9*60 + time*step);

  var hours = Math.trunc(dayTime / 60);
  var minutes = Math.trunc(dayTime - 60*hours);

  var ampm = "am";
  if (hours >= 12) {
    ampm = "pm";
  }
  if (hours > 12) {
    hours -= 12;
  }

  minutes = Math.trunc(minutes/10)*10;
  if (minutes==0) {
    minutes = "00";
  } else {
    minutes = "" + minutes;
  }

  return "" + hours + ":" + minutes + " " + ampm;
}

window.setInterval(function() {
  gamestate.time++;
  for (var i = 0; i < gamestate.people.length; i++) {
    gamestate.people[i].stress+=0.03;
  }
  renderScreen();
}, 1000);

var startGame = function() {
  startNewDay();
  renderScreen();
};

startGame();
