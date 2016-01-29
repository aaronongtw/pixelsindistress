
var gamestate = {
  time: 320,
  people: [
    {name: "John"},
    {name: "John"},
    {name: "John"},
  ],
  activePerson: -1
};





var renderScreen = function() {
  if (gamestate.activePerson >= 0 && gamestate.people.length) {
    var dialog = window.OurGame.makeDialog(gamestate.people[gamestate.activePerson]);
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

var pickPerson = function(index) {
  console.log(arguments);
  gamestate.activePerson = index;
};

startGame();
