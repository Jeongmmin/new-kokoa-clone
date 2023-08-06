const progressbarField = document.querySelector('.progress-bar__total-play-part');
const played = progressbarField.querySelector('.progress-bar__played-part');
const playnow = progressbarField.querySelector('.progress-bar__play-now-part');

const controllerField = document.querySelector('.music-controller-box');
const playBtn = controllerField.querySelector('.controller__playBtn i');
const music = new Audio('music.mp3');

let play = false;


playBtn.addEventListener('click', () => {
  play = !play;
  if (play === false) {
    stopSound(music);
  } else {
    playSound(music);
    
  }
});

function playSound(sound) {
  sound.play();
  sound.currentTime = 0;
  playBtn.classList.remove('fa-circle-play');
  playBtn.classList.add('fa-circle-stop');
  played.classList.add('played-animation');
    playnow.classList.add('play-now-animation');
}

function stopSound(sound) {
  sound.pause();
  playBtn.classList.remove('fa-circle-stop');
  playBtn.classList.add('fa-circle-play');
  played.classList.remove('played-animation');
    playnow.classList.remove('play-now-animation');
}