$(document).ready(function () {
    //Generates the random number by computer to match..
    var comPick = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('.randNumber').html(comPick);

    //generates the random number whenever click on crystals..
    var colBlue = Math.floor(Math.random() * 12 + 1)
    var colGreen = Math.floor(Math.random() * 12 + 1)
    var colRed = Math.floor(Math.random() * 12 + 1)
    var colYellow = Math.floor(Math.random() * 12 + 1)

    //every new game start with zero
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    //updates addition win or loss.
    $("#wins").text(wins);
    $("#losses").text(losses);

    //creating restart function..
    function reset() {
        comPick = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('.randNumber').html(comPick);


        colBlue = Math.floor(Math.random() * 12 + 1)
        colGreen = Math.floor(Math.random() * 12 + 1)
        colRed = Math.floor(Math.random() * 12 + 1)
        colYellow = Math.floor(Math.random() * 12 + 1)
        playerTotal = 0;
        $('.totalScore').text(0);
    }
    //adds the wins to the userTotal
    function winPlus(){
    alert("You won!");
      wins++; 
      $("#wins").text(wins);
      reset();
    }
    //addes the losses to the userTotal
    function losePlus(){
    alert ("You lose!");
      losses++;
      $("#losses").text(losses);
      reset()
    }

    //activating on click function on crystals
    // blue crystal
    $('#blue').on('click', function() {
        playerTotal = playerTotal + colBlue;
        $('.totalScore').text(playerTotal);

        if (playerTotal === comPick) {
            winPlus();
        } else if (playerTotal > comPick) {
            losePlus();
        }
    });

    //green crystal
    $('#green').on('click', function() {
        playerTotal = playerTotal + colGreen;
        $('.totalScore').text(playerTotal);

        if (playerTotal === comPick) {
            winPlus();
        } else if (playerTotal > comPick) {
            losePlus();
        }
    });

    //red crystal
    $('#red').on('click', function() {
        playerTotal = playerTotal + colRed;
        $('.totalScore').text(playerTotal);

        if (playerTotal === comPick) {
            winPlus();
        } else if (playerTotal > comPick) {
            losePlus();
        }
    });

    // yellow crystals
    $('#yellow').on('click', function() {
        playerTotal = playerTotal + colYellow;
        $('.totalScore').text(playerTotal);

        if (playerTotal === comPick) {
            winPlus();
        } else if (playerTotal > comPick) {
            losePlus();
        }
    });
});









