var full = document.getElementById('full');
var videoarea = document.getElementById('video-area');
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");

// fullボタンを押した時
full.addEventListener('click', function() {
  if (document.fullscreenEnabled) {
    videoarea.requestFullscreen();
  }
  else if (document.webkitFullscreenEnabled) {
    videoarea.webkitRequestFullscreen();
  }
  else if (document.mozFullScreenEnabled) {
    videoarea.mozRequestFullScreen();
  }
  else if (document.msFullscreenEnabled) {
    videoarea.msRequestFullscreen();
  }
  else {
    alert('全画面表示できません。');
    console.log('error!');
  }
});

document.onkeydown = keydown;

function keydown() {
  if (event.keyCode == 49 || event.keyCode == 97) {
    video2.style.display = 'none';
    video3.style.display = 'none';
    video4.style.display = 'none';
    video1.style.display = 'block';
    video1.currentTime = 0;
    video1.play();
  }
  if (event.keyCode == 50 || event.keyCode == 98) {
    video1.style.display = 'none';
    video3.style.display = 'none';
    video4.style.display = 'none';
    video2.style.display = 'block';
    video2.currentTime = 0;
    video2.play();
  }
  if (event.keyCode == 51 || event.keyCode == 99) {
    video1.style.display = 'none';
    video2.style.display = 'none';
    video4.style.display = 'none';
    video3.style.display = 'block';
    video3.currentTime = 0;
    video3.play();
  }
  if (event.keyCode == 52 || event.keyCode == 100) {
    video1.style.display = 'none';
    video2.style.display = 'none';
    video3.style.display = 'none';
    video4.style.display = 'block';
    video4.currentTime = 0;
    video4.play();
  }
  if (event.keyCode == 27) {
    if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
