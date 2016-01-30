var characters = [{
    name: 'Harlan Shufelt',
    gender: 'M',
    age: 41,
    startStress: 12,
    maxStress: 35,
    avatarPosition: 1
}, {
    name: 'Coleman Coplan',
    gender: 'M',
    age: 26,
    startStress: 17,
    maxStress: 40,
    avatarPosition: 4
}, {
    name: 'Gaston Lyles',
    gender: 'M',
    age: 38,
    startStress: 17,
    maxStress: 50,
    avatarPosition: 5
}, {
    name: 'Harris Mulhall',
    gender: 'M',
    age: 18,
    startStress: 5,
    maxStress: 20,
    avatarPosition: 7
}, {
    name: 'August Bartkowiak',
    gender: 'M',
    age: 23,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 8
}, {
    name: 'Andy Colston',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 10
}, {
    name: 'Huey Hanney',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 11
}, {
    name: 'Omar Groom',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 12
}]

var newDay = {
  indexList : randomCharList()
}

var randomCharList = function() {
    CharIndexList = []
    for (var i = 0; CharIndexList.length < 5; i++) {
        indexValue = (Math.floor(Math.random() * 54) + 1)
        if (CharIndexList.indexOf(indexValue) == -1) {
            CharIndexList.push(indexValue)
        }
    }
    return CharIndexList
}

var gender: ['M', 'F', 'F', 'M', 'M', 'F', 'M', 'M', 'F', 'M', 'M', 'M12', 'F', 'M', 'F', 'F', 'F', 'F', 'M', 'F', 'M', 'M', 'M', 'F', 'F', 'F', 'F', 'M', 'F', 'M', 'F', 'F', 'F', 'F', 'M', 'M', 'F', 'F', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'F', 'M']
    // 'Tim Ardon',
    // 'Harley Bilby',
    // 'Olen Deitch',
    // 'Otto Cuenca',
    // 'Ignacio Bartol',
    // 'Pierre Pantoja',
    // 'Franklin Brecht',
    // 'Sammie Gerson',
    // 'Fermin Mcgarvey',
    // 'Johnie Clendenin',
    // 'Hiram Speed',
    // 'Luke Wolf'




var gamestate = {
    time: 320,
    people: [{
        name: "John"
    }, {
        name: "John"
    }, {
        name: "John"
    }, ],
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
