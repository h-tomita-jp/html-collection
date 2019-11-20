    var $countA = 0;

    $('#box').on('click', function(){
      $countA++;
      if ($countA == 1) {
        document.getElementById("move1").style.display="block";
      }
      else if ($countA == 2) {
        document.getElementById("move2").style.display="block";
      }
      else if ($countA == 3) {
        document.getElementById("move3").style.display="block";
      }
      else if ($countA == 4) {
        document.getElementById("move1").style.display="none";
        document.getElementById("move2").style.display="none";
        document.getElementById("move3").style.display="none";
        $countA = 0;
      }
    });
