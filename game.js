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


var maxTimeTicks = 100;
var stressTick = 0.6;



var gamestate = {
    nurse: 0,
    chocolate: 0,
    dayNo: 0,
    time: 0,
    dayInProgress: false,
    people: [],
    messages: [],
    activePerson: null,
    showReport: false,
    playerStats : {
    money: 30,
    morale: 4}
};

var startNewDay = function() {
  gamestate.startdaymoney = gamestate.playerStats.money
  gamestate.startdaymorale = gamestate.playerStats.morale
  gamestate.dayNo++;
  gamestate.time = 0;
  gamestate.messages = [];
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
    if (person.animationOnly) {
        return;
    }

    if (choice.farewell) {
        gamestate.activePerson.state = choice.next;
        personLeave(gamestate.activePerson);
        return;
    }

    var nextStep = person.conversation[choice.next];

    person.stress += nextStep.deltaStress || 0;
    person.state = choice.next;

    if (nextStep.winner) {
        if (nextStep.morale) {
            gamestate.playerStats.morale += nextStep.morale
        }
        if (nextStep.good == true) {
            gamestate.playerStats.money += 10
        }
        else {
            gamestate.playerStats.money -= 10
        }

    }

    checkPersonLeave(person);

    renderScreen();
};

var popupclose = function() {
    gamestate.activePerson = null;
    renderScreen();
};

var personLeave = function(person) {
  var idx = gamestate.people.indexOf(person);
  gamestate.people.splice(idx, 1);
  if (person == gamestate.activePerson) {
    gamestate.activePerson = null;
  }
  if (!gamestate.people.length) {
    dayOver();
  }
  renderScreen();
};

var checkPersonLeave = function(person) {
  if (person.animationOnly) {
    return;
  }
  if (person.stress >= person.maxStress) {
    person.animationOnly = true;
    gamestate.playerStats.morale-=2;
    gamestate.playerStats.money-=10;
    person.exploding = true;
    var sound = new Howl({
      urls: ['assets/death.wav'],
      volume:0.04
    }).play();
    setTimeout(function() { personLeave(person); }, 2000);
    gamestate.newAlert('-$10 -2 Morale','red');
  }
  if (person.stress <= 0) {
    person.animationOnly = true;
    var sound = new Howl({
      urls: ['assets/magical.ogg'],
      volume:0.04
    }).play();
    setTimeout(function() { personLeave(person); }, 2000);
    gamestate.playerStats.morale++;
    gamestate.playerStats.money+=10;
    gamestate.newAlert('+$10 +1 Morale', 'green');
    gamestate.newAlert('Problem Solved', 'green');
  }
};

var renderScreen = function() {
    if (gamestate.activePerson) {
        var dialog = window.OurGame.makeDialog(gamestate.activePerson, personStepCallback, popupclose)
    }
    if (!gamestate.activePerson && gamestate.showReport) {
        var dialog = window.OurGame.dayReport(gamestate, startNewDay, buyNurse, buyChocolates);
    }

    ReactDOM.render(
        window.OurGame.room(gamestate, gamestate.people, dialog, pickPerson),
        document.getElementById('maindiv')
    );
};

var buyNurse = function() {
    gamestate.nurse = 1
    gamestate.playerStats.money -= 100
    maxTimeTicks += 20
    renderScreen()
}

var buyChocolates = function() {
    gamestate.chocolate = 1
    gamestate.playerStats.money -= 80
    stressTick -= 0.2
    renderScreen()
}


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

gamestate.newAlert = function(alert, colour) {
    console.log('ALERT ', alert, colour);
    var al = {
        text: alert,
        colour: colour,
    };
    gamestate.messages.push(al);

    window.setTimeout(function() {
        gamestate.messages.splice(gamestate.messages.indexOf(al), 1);
        renderScreen();
    }, 2000);
}

var timeProgress = function() {
  gamestate.time++;
  for (var i = 0; i < gamestate.people.length; i++) {
      gamestate.people[i].stress += stressTick;
      checkPersonLeave(gamestate.people[i]);
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
  var sound = new Howl({
    urls: ['assets/round_end.wav'],
    volume:0.04
  }).play();

  if (gamestate.playerStats.money < 0 || gamestate.playerStats.morale < 0) {
    gamestate.gameOver = true;
    var sound = new Howl({
      urls: ['assets/gameover.wav'],
      volume:0.04
    }).play();
  }
};
