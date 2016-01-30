
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


var gamestate = {
    dayNo: 0,
    time: 320,
    people: randomCharList(),
    activePerson: null,
    showReport: false,
};

var startNewDay = function() {
  gamestate.dayNo ++;
  gamestate.time = 320;
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

startNewDay();

var pickPerson = function(index) {
  gamestate.activePerson = gamestate.people[index];
  gamestate.showReport = false;

  renderScreen();
};

var personStepCallback = function(person, choice) {

  var nextStep = person.conversation[choice.next];

  person.stress += nextStep.deltaStress || 0;
  person.state = choice.next;

  if (nextStep.winner) {
    person.stress = 0;
    var idx = gamestate.people.indexOf(gamestate.activePerson);
    gamestate.people.splice(idx, 1);
    gamestate.activePerson = null;
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
        window.OurGame.room(gamestate.time, gamestate.people, dialog, pickPerson),
        document.getElementById('maindiv')
    );
};

var Person = function(name, gender, age, stress) {

};


var startGame = function() {
    renderScreen();
};


startGame();
