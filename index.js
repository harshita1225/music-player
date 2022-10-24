const musicContainer = document.querySelector(".main-container");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".forward");
const img = document.getElementById("img");
const track = document.getElementById("track-num");
const audio = document.getElementById("audio");
const progress = document.querySelector(".loading-gradient");
const progressContainer = document.querySelector(".loading");
const title = document.getElementById("title");
const cover = document.querySelector(".track-img");

const p = document.getElementById("p");
const s = document.getElementById("s");

// Song titles
const songs = ["hey", "summer", "ukulele"];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  img.src = `images/${song}.jpg`;
}

// Play song

function playSong() {
  cover.classList.add("rotate");
  musicContainer.classList.add("playing");
  p.classList.add("fa-stop");
  p.classList.remove("fa-play");
  audio.play();
}

// Pause song
function pauseSong() {
  cover.classList.remove("rotate");

  musicContainer.classList.remove("playing");
  p.classList.remove("fa-stop");
  p.classList.add("fa-play");
  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("playing");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Song ends
audio.addEventListener("ended", nextSong);
