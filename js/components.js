window.OurGame = window.OurGame || {};
window.OurGame.room = function(time, people, dialog) {
  var Rooms = [];
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    Rooms.push(<div className='beds' >
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
