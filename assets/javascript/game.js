$(document).ready ()
    var Random = Math.floor(Math.random()*101+19)
    $("#randomNumber").text(Random);
  
    var blueNum = Math.floor(Math.random()*11+1);
    var redNum = Math.floor(Math.random()*11+1);
    var yellowNum = Math.floor(Math.random()*11+1);
    var purpleNum = Math.floor(Math.random()*11+1);

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    function resetGame() {
        Random;
        $("#randomNumber").text(Random);
        blueNum = Math.floor(Math.random()*11+1);
        redNum = Math.floor(Math.random()*11+1);
        yellowNum = Math.floor(Math.random()*11+1);
        purpleNum = Math.floor(Math.random()*11+1);
        totalScore = 0;
        $("#finalScore").text(totalScore);
    }

    function win(){
        $("#winMessage").text("You Won!");
        wins++;
        $("#wins").text(wins);
        resetGame();
    }

    function lose() {
        $("#winMessage").text("You Lost!");
        losses++;
        $("#losses").text(losses);
        resetGame();
    }

    $(document).on("click", "#blue", function(){
        totalScore = totalScore + blueNum;
        $("#finalScore").text(totalScore);
            if (totalScore == Random) {
                win();
            }
            else if (totalScore > Random) {
                lose();
            }
    })

    $(document).on("click","#red", function(){
        totalScore = totalScore + redNum;
        $("#finalScore").text(totalScore);
            if (totalScore == Random) {
                win();
            }
            else if (totalScore > Random) {
                lose();
            }
    })

    $(document).on("click", "#yellow", function(){
        totalScore = totalScore + yellowNum;
        $("#finalScore").text(totalScore);
            if (totalScore == Random) {
                win();
            }
            else if (totalScore > Random) {
                lose();
            }
    })

    $(document).on("click","#purple", function(){
        totalScore = totalScore + purpleNum;
        $("#finalScore").text(totalScore);
            if (totalScore == Random) {
                win();
            }
            else if (totalScore > Random) {
                lose();
            }
    });

   






