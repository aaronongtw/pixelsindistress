window.OurGame = window.OurGame || {};
window.OurGame.room = function(lvl, number) {
  var Rooms = [];
  for (var i = 0; i < number; i++) {
    Rooms.push(<div><p id={'p'+i} class='stresslevel'>{lvl}</p>
      <button class='avatar' id={'p'+i+'c'}></button></div>);
  }
  return <div id="room">
            {Rooms}
          </div>;
};
