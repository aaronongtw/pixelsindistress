window.OurGame = window.OurGame || {};
window.OurGame.room = function(time, people, dialog, pickPerson = ()=>[]) {
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
        </div>;
};

window.OurGame.makeDialog = function(person, personStepCallback) {
  var choices = [];

  var state = person.conversation[person.state];

  for (var i = 0; i < state.options.length; i++) {
    choices.push(<li onClick={personStepCallback.bind(this, person, state.options[i])}>{state.options[i].text}</li>);
  }

  return <div className="dialog">
      <div>{state.text}</div>
      <ul>
        {choices}
      </ul>
    </div>;
}
