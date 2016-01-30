
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
    activePerson: null
};

var pickPerson = function(index) {
  gamestate.activePerson = gamestate.people[index];

  if (!gamestate.activePerson.state) {
    gamestate.activePerson.state = "start";
    gamestate.activePerson.stress = gamestate.activePerson.startStress;
  }

  renderScreen();
};

var personStepCallback = function(person, choice) {

  var nextStep = person.conversation[choice.next];

  person.stress += nextStep.deltaStress || 0;
  person.state = choice.next;

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
    if (!gamestate.activePerson) {
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
