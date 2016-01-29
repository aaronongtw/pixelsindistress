window.OurGame = window.OurGame || {};
window.OurGame.room = function(lvl, number) {
  var Rooms = [];
  for (var i = 0; i < number; i++) {
    Rooms.push(<div className='beds' ><div className='tempBar'>{lvl}</div>
      <button className='avatar' ></button></div>);
  }
  return <div id="room">
          <div  className='patients' >
                {Rooms}
            </div>
          </div>;
};
