var randNumber = Math.floor((Math.random()* 100) + 19);
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var wins = 0;
var losses = 0;
var totalScore = 0;

var updateAddition = function(){
    $(".randNumber").empty();
    $(".randNumber").append(randNumber);
    $(".totalScore").empty();
    $(".totalScore").append(totalScore);
    $('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);}
	
var restart = function(){
    totalScore = 0;
    randNumber = Math.floor((Math.random()* 100) + 19);

    $(".randNumber").empty();
    $(".randNumber").append(randNumber);

    red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);

    updateAddition();
}

var key = function(){
    if ( totalScore == randNumber){
        wins = wins +1;
        restart();
    }
    else if ( totalScore > randNumber){
        losses = losses +1;
        restart();
    }
    else{
        updateAddition();
    }
}
$(".randNumber").append(randNumber);
$(".totalScore").append(totalScore);

$(document).ready(function(){
$("#red").click(function(){
    totalScore = totalScore + red;
    key();
})
$("#blue").click(function(){
    totalScore = totalScore + blue;
    key();
})
$("#yellow").click(function(){
    totalScore = totalScore + yellow;
    key();
})
$("#green").click(function(){
    totalScore = totalScore + green;
    key();
})

});








