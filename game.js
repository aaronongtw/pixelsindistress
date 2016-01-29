
var gamestate = {
  time: 320,
  people: [
    {name: "John"},
    {name: "John"},
    {name: "John"},
  ],
  activePerson: 0
};

var makeDialog = function(person) {
  var prompt = "hello, Dr Aaron";
  var opts = [
    "How are you today, " + person.name + "?",
    "How have you been?",
    "What brought you to the clinic today?"
  ];

  var choices = [];
  for (var i = 0; i < opts.length; i++) {
    choices.push(<li>{opts[i]}</li>);
  }

  return <div className="dialog">
      <div>{prompt}</div>
      <ul>
        {choices}
      </ul>
    </div>;
}



var renderScreen = function() {
  if (gamestate.activePerson >= 0 && gamestate.people.length) {
    var dialog = makeDialog(gamestate.people[gamestate.activePerson]);
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
