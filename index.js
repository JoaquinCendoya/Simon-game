
let buttonColors=["red","blue","green","yellow"];

var userClickedPattern=[];

var level = 0;

var gamePattern=[];

function nextSequence() {
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    level++;
    $("#level-title").text("Level "+level);
};


$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
    $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("."+currentColor).addClass("pressed").delay(100).removeClass("pressed");
}

$("body").on("keypress", function () {
    nextSequence();
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log(succes);
    }
}