


var randomCharList = function() {
    var CharIndexList = []
    for (var i = 0; CharIndexList.length < 5; i++) {
        var indexValue = (Math.floor(Math.random() * 54) + 1)
        if (CharIndexList.indexOf(indexValue) == -1) {
            CharIndexList.push(indexValue)
        }
    }
    return CharIndexList
};

var newDay = {
  indexList : randomCharList()
}

var gender: ['M', 'F', 'F', 'M', 'M', 'F', 'M', 'M', 'F', 'M', 'M', 'M12', 'F', 'M', 'F', 'F', 'F', 'F', 'M', 'F', 'M', 'M', 'M', 'F', 'F', 'F', 'F', 'M', 'F', 'M', 'F', 'F', 'F', 'F', 'M', 'M', 'F', 'F', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'F', 'M']





var gamestate = {
    time: 320,
    people: [{
        name: "John"
    }, {
        name: "Bob"
    }, {
        name: "Rob"
    }, ],
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
