// ページが読み込まれたら実行
window.onload = function() {

  // オブジェクトと変数の準備
  var p_1 = document.getElementById("p_1");
  var p_2 = document.getElementById("p_2");
  var p_3 = document.getElementById("p_3");
  var minus_A = document.getElementById("minus_A");
  var minus_B = document.getElementById("minus_B");
  var dec_p = 0;
  var disp_team = document.getElementById("disp_team");
  var disp_countA = document.getElementById("disp_countA");
  var disp_countB = document.getElementById("disp_countB");
  var reset_btn = document.getElementById("btn_reset");
  var team_A = 0;
  var team_B = 0;
  var audioElement = document.getElementById("Sound");

  function judge(person) {
    audioElement.currentTime = 0;
    audioElement.play();
    if (team_A <= team_B) {
      disp_team.innerHTML = "A";
      disp_team.style.backgroundColor = "Red";
      team_A += person;
      disp_countA.innerHTML = team_A;
    }
    else {
      disp_team.innerHTML = "B";
      disp_team.style.backgroundColor = "Yellow";
      team_B += person;
      disp_countB.innerHTML = team_B;
    }
  }

  function minus(team) {
    dec_p = window.prompt("チーム" + team + "からメンバーを減らします。\n何人減らしますか？", "");
    if (team == "A") {
      if(dec_p > 0 && dec_p <= team_A){
        team_A -= dec_p;
        disp_countA.innerHTML = team_A;
      }
    }
    if (team == "B") {
      if(dec_p > 0 && dec_p <= team_B){
        team_B -= dec_p;
        disp_countB.innerHTML = team_B;
      }
    }
  }

  // 減らすボタンクリック処理
  minus_A.onclick = function() {
    minus("A");
  };
  minus_B.onclick = function() {
    minus("B");
  };



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

  // 人数ボタンのマウスダウン処理
  p_1.onmousedown = function() {
    p_1.style.backgroundColor = "#0B5";
    p_1.style.Color = "Black";
  };
  p_2.onmousedown = function() {
    p_2.style.backgroundColor = "#0B5";
    p_2.style.Color = "Black";
  };
  p_3.onmousedown = function() {
    p_3.style.backgroundColor = "#0B5";
    p_3.style.Color = "Black";
  };

  // リセットボタンのマウスアップ処理
  p_1.onmouseup = function() {
    p_1.style.backgroundColor = "#093";
    p_1.style.Color = "White";
  };
  p_2.onmouseup = function() {
    p_2.style.backgroundColor = "#093";
    p_2.style.Color = "White";
  };
  p_3.onmouseup = function() {
    p_3.style.backgroundColor = "#093";
    p_3.style.Color = "White";
  };

  // リセットボタンのクリック処理
  reset_btn.onclick = function() {
    disp_team.innerHTML = "-";
    disp_team.style.backgroundColor = "lightgray";
    team_A = 0;
    team_B = 0;
    disp_countA.innerHTML = team_A;
    disp_countB.innerHTML = team_B;
  };

  // リセットボタンのマウスダウン処理
  reset_btn.onmousedown = function() {
    reset_btn.style.backgroundColor = "#00FF00";
  };

  // リセットボタンのマウスアップ処理
  reset_btn.onmouseup = function() {
    reset_btn.style.backgroundColor = "";
  };
};