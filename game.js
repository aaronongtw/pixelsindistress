
window.OurGame = window.OurGame || {};

window.OurGame.gameScreen = function(time, scores) {
  var peeps = [];
  for (var i = 0; i < scores.length; i++) {
    peeps.push(<li>{scores[i]}</li>);
  }
  return <div>
      <h1>{time}</h1>
      <ul>
        {peeps}
      </ul>
    </div>;
};

ReactDOM.render(
  window.OurGame.gameScreen(3, [12, 5, 8]),
  document.getElementById('maindiv')
);
