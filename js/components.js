// var bx = 60, by = 52, w = 48, h = 148, gx=16, gy=52;
// new PIXI.Rectangle(bx+i*(w+gx), by+j*(h+gy), w, h);

window.OurGame = window.OurGame || {};
window.OurGame.room = function(time, people, dialog, pickPerson, report = ()=>[]) {
  var Rooms = [];
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    console.log(p.avatarPosition)
    Rooms.push(<div className='beds' onClick={pickPerson.bind(i,i)}>
        <div className='tempBar'>{p.stress} / {p.maxStress}</div>
        <button className='avatar' style={{'background-position': '-' + (60+((p.avatarPosition-1)*(48+16))) + "px " + '-52px'}} ></button>
      </div>);
  }
  return <div id="room">
          <div  className='patients' >
            {Rooms}
          </div>
          {dialog}
          {report}
        </div>;
};

window.OurGame.makeDialog = function(person, personStepCallback, popupclose) {
  var choices = [];

  var state = person.conversation[person.state];

  for (var i = 0; i < state.options.length; i++) {
    choices.push(<li onClick={personStepCallback.bind(this, person, state.options[i])}>{state.options[i].text}</li>);
  }

  return <div id='dialogbox' className="dialog">
            <div id='popupx' onClick={popupclose} >[X]</div>
            <div>{state.text}</div>
            <ul>
              {choices}
            </ul>
          </div>;
}

window.OurGame.dayReport = function(gameState, popupclose) {
  var day = gameState.DayNo;
  var choices = [];
  for (var i = 0; i < gameState.people.length; i++) {
    choices.push(<li>{gameState.people[i].name}</li>);
  }

  return <div id='reportBox' className="report">
            <div id='popupx' onClick={popupclose} >[X]</div>
            <div>Day {day}</div>
            <ul>
              {choices}
            </ul>
          </div>;
}
