
var gamestate = {
  time: 320,
  people: [
    {name: "John"},
    {name: "John"},
    {name: "John"},
  ],
  activePerson: 0
};





var renderScreen = function() {
  if (gamestate.activePerson >= 0 && gamestate.people.length) {
    var dialog = window.OurGame.makeDialog(gamestate.people[gamestate.activePerson]);
  }
  ReactDOM.render(
    window.OurGame.room(gamestate.time, gamestate.people, dialog),
    document.getElementById('maindiv')
  );
};

var Person = function(name, gender, age, stress) {

};


var startGame = function() {
  renderScreen();
};

var pickPerson = function() {

};

startGame();
