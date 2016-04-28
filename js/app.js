function reset() {
 location.reload();
}
var worldrecord = 1000;
var area;

var color = 'red';
var timerand;

function buttonClick () {
    timerand = Math.round(Math.random()*10);
    console.log(timerand);
    setTimeout(
    createPic,
    (timerand*1000)
    );
    setTimeout(toggle, timerand*1000);
}
function createPic () {
  document.getElementById(color).innerHTML = "";
  area = Math.round(Math.random()*5);
  if (area === 0) {
    color = 'red';
  };
  if (area === 1) {
    color = 'orange';
  };
  if (area === 2) {
    color = 'yellow';
  };
  if (area === 3) {
    color = 'green';
  };
  if (area === 4) {
    color = 'blue';
  };
  if (area === 5) {
    color = 'violet';
  };
  document.getElementById(color).innerHTML = "<input onClick='togglesw()' type='image' src='gif.gif' height='300px' width='300px'>";
};

var s = 0,
  ms = 0,
  sEl = document.getElementById('s'),
  msEl = document.getElementById('ms'),
  play = false;
stopwatch = setInterval(function() {
  if (!play) return;
  if (ms === 999) {
    s += 1;
    ms = 0;
  } else {
      ms += 1;
  }
  update();

}, 1);

function update() {
  sEl.innerText = s;
  msEl.innerText = ms;
}
function togglesw() {
  console.log('cheating prevention enabled');
  alert('To prevent cheating, we will show your score after you press ok. If you have a world record, take a screenshot! There will be NO way to get it back after you press ok!');
  alert('Your score was ' + ms + 'ms! Good Job! Thanks for playing! To play again press the "OK" button.');
  location.reload();
}
function toggle() {
  if (!play) {
    s = 0, ms = 0;
    update();
  }
  play = !play;
}

