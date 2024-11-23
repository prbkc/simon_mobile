var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 1;


function playSound(name) {
    $('#' + name).fadeOut(100).fadeIn(100);
    var colorSound = new Audio('sounds/' + name + '.mp3');
    colorSound.play();
}


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $('#start').text('Level: ' + level);
    // level++;
    userClickedPattern = [];


}

$('#start').click(function () {
    nextSequence();

});

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}


// check which button is pressed
$('.btn').click(function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    if (userClickedPattern[userClickedPattern.length - 1] != gamePattern[userClickedPattern.length - 1]) {
        $('body').addClass('game-over');

        var wrongSound = new Audio('sounds/wrong.mp3');
        wrongSound.play();

        var finalScore = level - 1;

        $('#start').text("Game Over!");

        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 500);

        setTimeout(function () {
            $('#start').text('Score: ' + (finalScore));
        }, 1000);

       

        setTimeout(function () {
            $('#start').text('Start Again');
        }, 2000);

        level = 1;
        gamePattern = [];
    }

    if (userClickedPattern.toString() === gamePattern.toString()) {
        setTimeout(function () {
            level++;
            nextSequence();

        }, 1200);

    }
}
);



