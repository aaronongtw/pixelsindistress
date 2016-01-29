// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 400);
renderer.backgroundColor = 0x888888;
// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
requestAnimationFrame( animate );

var stage = new PIXI.Container();

window.Game = {};


WebFontConfig = {
  google: {
    families: [
      'Snippet',
      'Press+Start+2P::latin,latin-ext',
      'VT323::latin'
    ]
  },
  active: function() {
    console.log('active');
    Fontz_Active();
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();


var people = PIXI.Texture.fromImage("assets/office_peeps.png");
var bx = 60, by = 52, w = 48, h = 148, gx=16, gy=52;

var people_textures = {};

people.on('update', function() {
  Game.progress.got();
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 4; j++) {
      var size = new PIXI.Rectangle(bx+i*(w+gx), by+j*(h+gy), w, h);
      var subtex = new PIXI.Texture(people, size);

      people_textures['' + i + '.' + j] = subtex;
    }
  }
});

window.Fontz_Active = function() {
    Game.progress.got();
    // create some white text using the Snippet webfont
    var title = new PIXI.Text('Pixels in Distress', {font:"30px 'Press Start 2P'", fill: 'white', align: 'center' });
    title.anchor.set(0.5, 0);
    title.position.set(300, 80);
    stage.addChild(title);

    var description = new PIXI.Text(
        "Virtual Mental Health Clinic\n\n" +
        "brought to you by people\n" +
        "who spent way too long in a real one",
        {
          font:"35px VT323",
          fill: 'white',
          align: 'center'
        });
    description.anchor.set(0.5, 0);
    description.position.set(300, 150);
    stage.addChild(description);
};

var Progress = function() {
  this.max = 0;
  this.val = 0;

  this.obj = new PIXI.Graphics();

  this.height = 60;
  this.width = 200;

  this.obj.cacheAsBitmapboolean = true;

  this.update();
};
Progress.prototype.update = function() {
  this.obj.clear();

  this.obj.moveTo(0,0);
  this.obj.lineStyle(4, 0xCCCCCC, 1);

  this.obj.lineTo(this.width-1, 0);
  this.obj.lineTo(this.width-1, this.height-1);
  this.obj.lineTo(0, this.height-1);
  this.obj.lineTo(0, 0);

  this.obj.beginFill(0xCCCCCC);
  this.obj.drawRect(8,8, (this.width - 16)*this.val/Math.max(this.max, 1), this.height - 18 );

  //this.obj.width = this.width;
  //this.obj.height = this.height;
};
Progress.prototype.enqueue = function() {
  this.max++;
};
Progress.prototype.got = function() {
  this.val++;
};

var progress = new Progress();
Game.progress = progress;
progress.max = 2;
progress.obj.position.set(300 - progress.obj.width/2, 200 - progress.obj.height/2);
stage.addChild(progress.obj);

setTimeout(function() {

  var UI = new PIXI.Container();

  var state = {
    cash: 1000,
    treated: 0,
    helped: 0,
    reputation: 50,
  };


  var cash = new PIXI.Text('Cash: $' + state.cash, {font:"20px 'Press Start 2P'", fill: '#1c1', align: 'right' });
  cash.position.x = 585;
  cash.position.y = 15;
  cash.anchor.x = 1;

  UI.addChild(cash);

  //UI.alpha = 0;

  stage.addChild(UI);

}, 3000);


function animate() {
  requestAnimationFrame( animate );

  if (progress.val == progress.max) {
    stage.removeChild(progress.obj);
  } else {
    progress.update();
  }

  // render the stage
  renderer.render(stage);
};
