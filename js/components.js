
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
  return <div id="room">
    <div  className='patients' >
    {Rooms}
    </div>
    {dialog}
    {report}
    <div className="timer">{gamestate.timeToString(gamestate.time)}</div>
    <div className="messageBox"></div>
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

window.OurGame.dayReport = function(gameState, popupclose) {
  var day = gameState.DayNo;
  var choices = [];
  for (var i = 0; i < gameState.people.length; i++) {
    choices.push(<li>{gameState.people[i].name}</li>);
  }

  return <div id='reportBox' className="report">
            <p className='close-thik' onClick={popupclose} ></p>
            <div>Day {day}</div>
            <ul>
              {choices}
            </ul>
            <button className="nextdayBtn"></button>
          </div>;
}
