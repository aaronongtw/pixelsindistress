window.OurGame = window.OurGame || {};
window.OurGame.room = function(time, people, dialog, pickPerson, report = ()=>[]) {
  var Rooms = [];
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    Rooms.push(<div className='beds' onClick={pickPerson.bind(i,i)}>
    <div className="progress vertical">
      <div className="progress-bar progress-bar-info"  style={{'width': '75%'}}>
      </div>
    </div>
    <div >{p.stress} / {p.maxStress}</div>
        <button className='avatar' ></button>
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
  state.options = state.options || [];

  for (var i = 0; i < state.options.length; i++) {
    choices.push(<li onClick={personStepCallback.bind(this, person, state.options[i])}>{state.options[i].text}</li>);
  }

  return <div id='dialogbox' className="dialog">
            <div className='popupx' onClick={popupclose} >[X]</div>
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
