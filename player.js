window.onload = function() {
	var video = document.getElementById("video");
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			video.play();
			playButton.innerHTML = "Pause";
		} else {
			video.pause();
			playButton.innerHTML = "Play";
		}
	});

	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			muteButton.innerHTML = "Unmute";
		} else {
			video.muted = false;
			muteButton.innerHTML = "Mute";
		}
	});

	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); 
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); 
		}
	});

	seekBar.addEventListener("change", function() {
		var time = video.duration * (seekBar.value / 100);
		video.currentTime = time;
	});

	
	video.addEventListener("timeupdate", function() {
		var value = (100 / video.duration) * video.currentTime;
		seekBar.value = value;
	});

	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	volumeBar.addEventListener("change", function() {
		video.volume = volumeBar.value;
	});
}
