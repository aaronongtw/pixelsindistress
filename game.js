


var randomCharList = function() {
    var CharIndexList = []
    var CharList = []
    for (var i = 0; CharIndexList.length < 5; i++) {
        var indexValue = (Math.floor(Math.random() * 13) + 1)
        if (CharIndexList.indexOf(indexValue) == -1) {
            CharIndexList.push(indexValue)
            CharList.push(characters[indexValue])
        }
    }
    return CharList
};


var gamestate = {
    time: 320,
    people: randomCharList(),
    activePerson: -1
};

var pickPerson = function(index) {
  console.log(arguments);
  gamestate.activePerson = index;
  renderScreen();
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


startGame();
