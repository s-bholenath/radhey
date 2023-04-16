const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playlist = document.getElementById('playlist');

let currentSong = 0;

function loadSong() {
	audio.src = playlist.children[currentSong].getAttribute('data-src');
}

function playSong() {
	audio.play();
	playBtn.innerHTML = '<i class="fa fa-pause"></i>';
}

function pauseSong() {
	audio.pause();
	playBtn.innerHTML = '<i class="fa fa-play"></i>';
}

function prevSong() {
	currentSong--;
	if (currentSong < 0) {
		currentSong = playlist.children.length - 1;
	}
	loadSong();
	playSong();
}

function nextSong() {
	currentSong++;
	if (currentSong > playlist.children.length - 1) {
		currentSong = 0;
	}
	loadSong();
	playSong();
}

loadSong();

playBtn.addEventListener('click', () => {
	const isPlaying = audio.paused;
	if (isPlaying) {
		playSong();
	} else {
		pauseSong();
	}
});

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);

playlist.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('song')) {
		currentSong = Array.from(target.parentNode.children).indexOf(target);
		loadSong();
		playSong();
	}
});
``
