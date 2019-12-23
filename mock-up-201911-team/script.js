var opening = document.getElementById("opening");
var p_1 = document.getElementById("p_1");
var p_2 = document.getElementById("p_2");
var p_3 = document.getElementById("p_3");
var disp_team = document.getElementById("disp_team");
var disp_team_container = document.getElementById("disp_team_container");
var disp_countA = document.getElementById("disp_countA");
var disp_countB = document.getElementById("disp_countB");
var reset_btn = document.getElementById("btn_reset");
var team_A = 0;
var team_B = 0;
var iframeAudio = document.getElementById("iframeAudio");
var openingSE = document.getElementById("openingSE");
var plusSE = document.getElementById("plusSE");
var minusSE = document.getElementById("minusSE");
var resetSE = document.getElementById("resetSE");

// オープニング処理
window.onload = function() {
  var isChrome = /Chrome/.test(window.navigator.userAgent) && /Google Inc/.test(window.navigator.vendor);
  if (!isChrome) {
    iframeAudio.parentElement.removeChild(iframeAudio);
  }
  var fadeout = function() {
    // opening.classList.add('close');
    opening.className += "close";
  }
  setTimeout(fadeout, 2000);
}

// 人数ボタンクリック処理
p_1.onclick = function() {
  judge(1);
};
p_2.onclick = function() {
  judge(2);
};
p_3.onclick = function() {
  judge(3);
};

function judge(person) {
  plusSE.currentTime = 0;
  plusSE.play();
  if (team_A <= team_B) {
    disp_team.innerHTML = "RED";
    disp_team_container.style.backgroundColor = "Red";
    team_A += person;
    disp_countA.value = team_A;
  }
  else {
    disp_team.innerHTML = "YELLOW";
    disp_team_container.style.backgroundColor = "Yellow";
    team_B += person;
    disp_countB.value = team_B;
  }
}

// 減らす処理(チームボタン押下時、一人減らす)
disp_countA.onclick = function() {
  minus("A");
};
disp_countB.onclick = function() {
  minus("B");
};

function minus(team) {
  if (team == "A") {
    if (1 <= team_A) {
      minusSE.currentTime = 0;
      minusSE.play();
      team_A--;
      disp_countA.value = team_A;
    }
  }
  if (team == "B") {
    if (1 <= team_B) {
      minusSE.currentTime = 0;
      minusSE.play();
      team_B--;
      disp_countB.value = team_B;
    }
  }
}

// リセットボタンのクリック処理
reset_btn.onclick = function() {
  resetSE.currentTime = 0;
  resetSE.play();
  disp_team.innerHTML = "-";
  disp_team_container.style.backgroundColor = "lightgray";
  team_A = 0;
  team_B = 0;
  disp_countA.value = team_A;
  disp_countB.value = team_B;
};

// 人数ボタンのマウスダウン処理
p_1.onmousedown = function() {
  p_1.style.backgroundColor = "#0B5";
};
p_2.onmousedown = function() {
  p_2.style.backgroundColor = "#0B5";
};
p_3.onmousedown = function() {
  p_3.style.backgroundColor = "#0B5";
};

// 人数ボタンのマウスアップ処理
p_1.onmouseup = function() {
  p_1.style.backgroundColor = "#093";
};
p_2.onmouseup = function() {
  p_2.style.backgroundColor = "#093";
};
p_3.onmouseup = function() {
  p_3.style.backgroundColor = "#093";
};
