window.OurGame.room = function(gamestate, people, dialog, pickPerson, report = ()=>[]) {
  var Rooms = [];
  for (var i = 0; i <people.length; i++) {
    var p = people[i];
    var shaker = '';
    if (gamestate.dayInProgress && p.stress/p.maxStress> 0.85) {
      shaker = 'shake-little shake-constant';
      if (p.stress/p.maxStress> 0.95) {
        shaker = 'shake shake-constant';
      }
    }
    var animationcss = 'avatar';
    if (p.stress >= p.maxStress) {
      if (!p.exploding) {
        animationcss = 'avatar';
      }
      else {
        animationcss = 'explosion';
      }
    }
    if (p.stress <= 0){
      animationcss='love';
      }
    Rooms.push(<div className={'beds '+shaker} key={i} onClick={pickPerson.bind(i,i)}>

    <div className="progress vertical">
      <div className="progress-bar progress-bar-info"  style={{'width': (p.stress / p.maxStress) * 100 + '%'}}>
      </div>
    </div>
    <div></div>
        <button className={animationcss} style={{'backgroundPosition': '-' + (60+((p.avatarPosition-1)*(48+16))) + "px " + '-52px'}}></button>
      </div>);
  }
  var startScreen = gamestate.dayNo == 0 ? getStartScreen(gamestate) : null;

  var messages = gamestate.messages.map(function  (msg) {
    return <div className={msg.colour}>{msg.text}</div>;
  });

  return <div id="room">
      <div className="statsBox" id="stats">Day:{gamestate.dayNo} Money:${gamestate.playerStats.money}   Morale:{gamestate.playerStats.morale}</div>
      <div  className='patients'>
      {Rooms}
      </div>
      {dialog}
      {report}
      <div className="timer">{gamestate.timeToString(gamestate.time)}</div>
      <div className="AlertBox">{gamestate.alerts}</div>
      <div className="messageBox"></div>
      {startScreen}
      <div className="popupMessages">
        {messages}
      </div>
    </div>;
  };

window.OurGame.makeDialog = function(person, personStepCallback, popupclose) {
  var choices = [];

  var state = person.conversation[person.state];
  state.options = state.options || [];

  for (var i = 0; i <state.options.length; i++) {
    choices.push( <li onClick = {
            personStepCallback.bind(this, person, state.options[i])
        }> {
            state.options[i].text
        } </li>);
    }

    return [ <div id = 'profilebox'
        className = "profile">
        <p className = 'close-thik'
        onClick = {
            popupclose
        }> </p> <ul> <li> Name: {
        person.name
    } </li><li>
    Age: {
        person.age
    } </li><li>
    Gender: {
        person.gender
    } </li><li>
    Description: {
        person.description
    } </li> </ul> </div> ,

    <div id = 'dialogbox'
    className = "dialog">
        <p className = 'close-thik'
    onClick = {
        popupclose
    }> </p> <div> {
    state.text
} </div> <ul> {choices} </ul> </div> ];
}

window.OurGame.dayReport = function(gameState, startNextDayFn, buyNurse, buyChocolates) {
  var day = gameState.dayNo;
  var choices = [];
  for (var i = 0; i <gameState.todaysPeople.length; i++) {
    var currentStress = gameState.todaysPeople[i].stress
    var stressChange = Math.floor(gameState.todaysPeople[i].stress-gameState.todaysPeople[i].startOfDayStress)

    choices.push(<li key={i}>{gameState.todaysPeople[i].name},<br/> Change in Stress:
      <span className={stressChange <= 0 ? "good":"bad"}>{stressChange}</span><br/> Status: <span className={currentStress <gameState.todaysPeople[i].maxStress ? "good":"bad"}>{(currentStress < 1) ? "CURED!" : currentStress <gameState.todaysPeople[i].maxStress ? "STABLE" : 'DERANGED'}</span> </li>);

  }

  var nextBtn = <div className="nextdayBtn" onClick={startNextDayFn}>Next Day</div>;
  if (gameState.dayInProgress || gameState.gameOver) {
    nextBtn = null;
  }
  var buyNursebtn = <div className="shop" onClick={buyNurse}>Buy a Hot Nurse<br/>Makes time go slower.<br/>$100</div>;
  if (gameState.dayInProgress || gameState.gameOver || gameState.playerStats.money < 100 || gameState.nurse == 1) {
    buyNursebtn = null;
  }
  var buyChocolatesbtn = <div className="shop" onClick={buyChocolates}>Buy chocolates for the waiting room<br/> patients get stress slower.<br/>$80</div>;
  if (gameState.dayInProgress || gameState.gameOver || gameState.playerStats.money < 80 || gameState.chocolate == 1) {
    buyChocolatesbtn = null;
  }

  var gameover = null;
  if (gameState.gameOver) {
    gameover = <h1 className="gameover">Game Over</h1>;
    nextBtn = <a href="javascript:window.location.reload()">Try Again</a>;
  }

  return <div className="startScreen">
  <div id='reportBox' className="report">
            {gameover}
            <div>Day {day} Report</div>
            <ul>
              <li>Net Profit : {gameState.playerStats.money - gameState.startdaymoney}</li>
              <li>Change in Morality : {gameState.playerStats.morale - gameState.startdaymorale}</li>
              {choices}
            </ul>
            {nextBtn}
            {buyNursebtn}
            {buyChocolatesbtn}
          </div></div>;

}
var getStartScreen = function(gamestate) {
  return <div className="startScreen">
      <h1>Pixels in Distress</h1>
      <h2>Virtual Clinic for Mental Health</h2>
      <h2>Brought to you by people who escaped a real one.</h2>
      <h4>Treat as many patients as possible and prevent them from going deranged. If your money or morale reaches zero, the game is over.</h4>
      <div className="startBtn" onClick={gamestate.startNewDay}>Begin</div>
    </div>;
};
