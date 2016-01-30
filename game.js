var randomCharList = function() {
    var CharIndexList = []
    var CharList = []
    var max;
    if (gamestate.dayNo > 6) {
        max = 7
    } else {
        max = (1 + gamestate.dayNo)
    }
    for (var i = 0; CharIndexList.length < max && i < 100; i++) {
        var indexValue = (Math.floor(Math.random() * window.OurGame.characters.length))
        var newChar = window.OurGame.characters[indexValue]
        if (CharIndexList.indexOf(indexValue) == -1 && (newChar.stress==undefined || newChar.stress < newChar.maxStress && newChar.stress > 0)) {
            CharIndexList.push(indexValue)
            CharList.push(window.OurGame.characters[indexValue])
        }
    }
    return CharList
};

var maxTimeTicks = 8;

var gamestate = {
    dayNo: 0,
    time: 0,
    dayInProgress: false,
    people: [],
    activePerson: null,
    showReport: false,
    startdaymoney : null,
    playerStats : {
    money: 50,
    morale: 9}
};

var startNewDay = function() {
  gamestate.startdaymoney = gamestate.playerStats.money
  gamestate.startdaymorale = gamestate.playerStats.morale
  gamestate.playerStats.morale++; 
  gamestate.dayNo++;
  gamestate.time = 0;
  gamestate.dayInProgress = true;
  gamestate.people = randomCharList();
  gamestate.todaysPeople = gamestate.people.slice();
  gamestate.activePerson = null;
  gamestate.showReport = false;
  for (var i = 0; i < gamestate.people.length; i++) {
        if (!gamestate.people[i].state) {
            gamestate.people[i].state = "start";
            gamestate.people[i].stress = gamestate.people[i].startStress;
            gamestate.people[i].startOfDayStress = gamestate.people[i].stress
        }
        gamestate.people[i].startOfDayStress = gamestate.people[i].stress;
    }
  renderScreen();
};

gamestate.startNewDay = startNewDay;

var pickPerson = function(index) {
    if (!gamestate.dayInProgress) {
        return;
    }
    var audio = document.getElementById("audio")
    audio.play()
    gamestate.activePerson = gamestate.people[index];
    gamestate.showReport = false;
    renderScreen();
};

var personStepCallback = function(person, choice) {
    if (!gamestate.dayInProgress) {
      return;
    }

    if (choice.farewell) {
        var idx = gamestate.people.indexOf(gamestate.activePerson);
        gamestate.people.splice(idx, 1);
        gamestate.activePerson = null;
        if (!gamestate.people.length) {
          dayOver();
        }
        renderScreen();
        return;
    }

    var nextStep = person.conversation[choice.next];

    person.stress += nextStep.deltaStress || 0;
    person.state = choice.next;

    if (nextStep.winner) {
        nextStep.options = [{
            text: "Glad I could help. Have a nice day.",
            farewell: true
        }]
        if (nextStep.morale) {
            gamestate.playerStats.morale += nextStep.morale
        }
        if (nextStep.good == true) {
            gamestate.playerStats.money += 10
        }
        else {
            gamestate.playerStats.money -= 10
        }
        ;
    }

    renderScreen();
};

var popupclose = function() {
    gamestate.activePerson = null;
    renderScreen();
};


var renderScreen = function() {
    if (gamestate.activePerson) {
        var dialog = window.OurGame.makeDialog(gamestate.activePerson, personStepCallback, popupclose)
    }
    if (!gamestate.activePerson && gamestate.showReport) {
        var dialog = window.OurGame.dayReport(gamestate, startNewDay);
    }

    ReactDOM.render(
        window.OurGame.room(gamestate, gamestate.people, dialog, pickPerson),
        document.getElementById('maindiv')
    );
};




gamestate.timeToString = function(time) {
    var step = (17 - 9) * 60 / maxTimeTicks;
    var dayTime = (9 * 60 + time * step);

    var hours = Math.trunc(dayTime / 60);
    var minutes = Math.trunc(dayTime - 60 * hours);

    var ampm = "am";
    if (hours >= 12) {
        ampm = "pm";
    }
    if (hours > 12) {
        hours -= 12;
    }

    minutes = Math.trunc(minutes / 10) * 10;
    if (minutes == 0) {
        minutes = "00";
    } else {
        minutes = "" + minutes;
    }

    return "" + hours + ":" + minutes + "" + ampm;
}

var timeProgress = function() {
  gamestate.time++;
  for (var i = 0; i < gamestate.people.length; i++) {
      gamestate.people[i].stress += 1;
  }
  if (gamestate.time >= maxTimeTicks) {
    dayOver();
  }
  renderScreen();
};

window.setInterval(function() {
    if (!gamestate.dayInProgress) {
        return;
    }
    timeProgress();
}, 1000);

var startGame = function() {
    renderScreen();
};
startGame();

var dayOver = function() {
  gamestate.dayInProgress = false;
  gamestate.showReport = true;
  gamestate.activePerson = null;
};
