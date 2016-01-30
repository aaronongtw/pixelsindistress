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

window.OurGame.makeDialog = function(person) {
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

  return <div className="dialog">
      <div>{prompt}</div>
      <ul>
        {choices}
      </ul>
    </div>;
}
