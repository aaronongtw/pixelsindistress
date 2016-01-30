var characters = [{
    name: 'Harlan Shufelt',
    gender: 'M',
    age: 41,
    startStress: 12,
    maxStress: 35,
    avatarPosition: 1,
    storyState: 0,
    endState: 0
}, {
    name: 'Coleman Coplan',
    gender: 'M',
    age: 26,
    startStress: 17,
    maxStress: 40,
    avatarPosition: 4,
    storyState: 0,
    endState: 0
}, {
    name: 'Gaston Lyles',
    gender: 'M',
    age: 38,
    startStress: 17,
    maxStress: 50,
    avatarPosition: 5,
    storyState: 0,
    endState: 0
}, {
    name: 'Harris Mulhall',
    gender: 'M',
    age: 18,
    startStress: 5,
    maxStress: 20,
    avatarPosition: 7,
    storyState: 0,
    endState: 0
}, {
    name: 'August Bartkowiak',
    gender: 'M',
    age: 23,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 8,
    storyState: 0,
    endState: 0
}, {
    name: 'Andy Colston',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 10,
    storyState: 0,
    endState: 0
}, {
    name: 'Huey Hanney',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 11,
    storyState: 0,
    endState: 0
}, {
    name: 'Omar Groom',
    gender: 'M',
    age: 35,
    startStress: 35,
    maxStress: 50,
    avatarPosition: 12,
    storyState: 0,
    endState: 0
}]


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
        name: "John",
        conversation: window.OurGame.conversations[0],
        state: null
    }, {
        name: "Bob",
        conversation: window.OurGame.conversations[0],
        state: null
    }, {
        name: "Rob",
        conversation: window.OurGame.conversations[0],
        state: null
    }, ],
    activePerson: null
};

var pickPerson = function(index) {
  gamestate.activePerson = gamestate.people[index];

  if (gamestate.activePerson.state == null) {
    gamestate.activePerson.state = "start";
    gamestate.activePerson.stress = gamestate.activePerson.conversation.start.initialStress;
    gamestate.activePerson.maxStress = gamestate.activePerson.conversation.start.maxStress;
  }

  renderScreen();
};

var personStepCallback = function(person, choice) {

  var nextStep = person.conversation[choice.next];

  person.stress += nextStep.deltaStress || 0;
  person.state = choice.next;

  renderScreen();
};

var renderScreen = function() {
    if (gamestate.activePerson) {
        var dialog = window.OurGame.makeDialog(gamestate.activePerson, personStepCallback);
    }

    var personStep = function(person, choice) {

    };
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
