window.OurGame = window.OurGame || {};
window.OurGame.room = function(time, people, dialog, pickPerson, report = ()=>[]) {
  var Rooms = [];
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    Rooms.push(<div className='beds' onClick={pickPerson.bind(i,i)}>
        <div className='tempBar'>{p.stress}</div>
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

window.OurGame.makeDialog = function(person,popupclose) {
  var prompt = "hello, Dr Aaron";
  var opts = [
    "How are you today, " + person.name + "?",
    "How have you been?",
    "What brought you to the clinic today?"
  ];

  var choices = [];
  for (var i = 0; i < opts.length; i++) {
    choices.push(<li>{opts[i]}</li>);
  }

  return <div id='dialogbox' className="dialog">
            <div id='popupx' onClick={popupclose} >[X]</div>
            <div>{prompt}</div>
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
