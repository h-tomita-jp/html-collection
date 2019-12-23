var opening = document.getElementById("opening");

// オープニング処理
window.onload = function() {
  // openingSE.currentTime = 0;
  var openingSE = document.getElementById("openingSE");
  var palyOpeningSE = function(){
    openingSE.play();
  }
  var fadeout = function(){
    opening.classList.add('close');
  } 
  setTimeout(fadeout, 2000);
  setTimeout(palyOpeningSE,2000);
}    

