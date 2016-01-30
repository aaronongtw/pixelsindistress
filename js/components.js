
// var bx = 60, by = 52, w = 48, h = 148, gx=16, gy=52;
// new PIXI.Rectangle(bx+i*(w+gx), by+j*(h+gy), w, h);

window.OurGame.room = function(gamestate, people, dialog, pickPerson, report = ()=>[]) {
  var Rooms = [];
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    var shaker = '';
    if (gamestate.dayInProgress && p.stress/p.maxStress > 0.85) {
      shaker = 'shake-little shake-constant';
      if (p.stress/p.maxStress > 0.95) {
        shaker = 'shake shake-constant';
      }
    }
    Rooms.push(<div className={'beds '+shaker} key={i} onClick={pickPerson.bind(i,i)}>

    <div className="progress vertical">
      <div className="progress-bar progress-bar-info"  style={{'width': (p.stress / p.maxStress) * 100 + '%'}}>
      </div>
    </div>
    <div ></div>
        <button className='avatar' style={{'backgroundPosition': '-' + (60+((p.avatarPosition-1)*(48+16))) + "px " + '-52px'}} ></button>
      </div>);
  }
  var startScreen = gamestate.dayNo == 0 ? getStartScreen(gamestate) : null;
  return <div id="room">
      <div className="statsBox" id="stats">Day:{gamestate.dayNo} Money:${gamestate.playerStats.money}   Morale:{gamestate.playerStats.morale}</div>
      <div  className='patients' >
      {Rooms}
      </div>
      {dialog}
      {report}
      <div className="timer">{gamestate.timeToString(gamestate.time)}</div>
      <div className="messageBox"></div>
      {startScreen}
    </div>;
  };

window.OurGame.makeDialog = function(person, personStepCallback, popupclose) {
  var choices = [];

  var state = person.conversation[person.state];
  state.options = state.options || [];

  for (var i = 0; i < state.options.length; i++) {
    choices.push( < li onClick = {
            personStepCallback.bind(this, person, state.options[i])
        } > {
            state.options[i].text
        } < /li>);
    }

    return [ < div id = 'profilebox'
        className = "profile" >
        < p className = 'close-thik'
        onClick = {
            popupclose
        } > < /p> < ul > < li > Name: {
        person.name
    } < /li><li>
    Age: {
        person.age
    } < /li><li>
    Gender: {
        person.gender
    } < /li><li>
    Description: {
        person.description
    } < /li> < /ul > < /div > ,

    < div id = 'dialogbox'
    className = "dialog" >
        < p className = 'close-thik'
    onClick = {
        popupclose
    } > < /p> < div > {
    state.text
} < /div> < ul > {choices} < /ul> < /div > ];
}

window.OurGame.dayReport = function(gameState, startNextDayFn) {
  var day = gameState.DayNo;
  var choices = [];
  for (var i = 0; i < gameState.people.length; i++) {
    choices.push(<li key={i}>{gameState.people[i].name}</li>);
  }

  var nextBtn = <div className="nextdayBtn" onClick={startNextDayFn}>continue to next day</div>;
  if (gameState.dayInProgress) {
    nextBtn = null;
  }

  return <div id='reportBox' className="report">
            <div>Day {day}</div>
            <ul>
              {choices}
            </ul>
            {nextBtn}
          </div>;
}

var getStartScreen = function(gamestate) {
  return <div className="startScreen">
      <h1>Pixels in Distress</h1>
      <h2>Virtual Clinic for Mental Health</h2>
      <h2>Brought to you by people who spent too long in a real one.</h2>
      <div className="startBtn" onClick={gamestate.startNewDay}>Begin</div>
    </div>;
};
