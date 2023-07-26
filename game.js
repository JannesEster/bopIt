var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;



function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++
    $("#level-title").text("Level "+ level);
    console.log(level);
}

$(".btn").on("click",function(){
    var userChosenColour = this.id;
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    
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
$(document).on("keydown", function () {
  if (started == false) {
    nextSequence();
    started = true;
    
  } else {
    alert("not doing it");
  }
});


