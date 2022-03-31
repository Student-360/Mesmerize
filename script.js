const clueHoldTime = holdTime;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var holdTime = 1000;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var numStrikes;

function randomPattern() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  }
}

function startGame() {
  holdTime =1000;
  progress = 0;
  randomPattern();
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  numStrikes = 0;
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("img1").classList.remove("hidden");
}


const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  5: 600,
  6: 700,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  //document.getElementById("img" + btn).style.display = 'show'
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  //document.getElementById("img" + btn).style.display = 'inline'
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, holdTime);
    setTimeout(clearButton, holdTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  for (let i = 0; i <= progress; i++) {
    
    holdTime -= 25;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += holdTime;
    delay += cluePauseTime;
  }
}

function winGame() {
  stopGame();
  alert("Game Over. You won...Your skills truly are unparalleled!");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost...Keep trying until you succeed!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    numStrikes++;
    if (numStrikes == 3) {
      loseGame();
    }
  }
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
