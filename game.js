var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    console.log(gamePattern);
}

$(".btn").on("click",function(){
    var userChosenColour = this.id;
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    console.log(userClickedPattern);
});

function playSound(name) {
    var audio = new Audio('sounds/' + name +'.mp3');
    audio.play();
}

function animatePress(currentColour){
    $('#'+ currentColour).addClass("pressed");
    setTimeout(function(){
        $('#'+ currentColour).removeClass("pressed");
    },100);

}


