
let buttonColors=["red","blue","green","yellow"];

var userClickedPattern=[];

var level = 0;

var gamePattern=[];



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
    var $colorPress= $("."+currentColor).addClass("pressed");
    setTimeout(function (){
        $colorPress.removeClass("pressed")
    }, 100); 
    
}

$("body").on("keypress", function () {
    nextSequence();
    started=true;
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout( function () {
                nextSequence()
            },1000);
        }
    }
    else {
        let audioWrong= new Audio("sounds/wrong.mp3");
        audioWrong.play();
        var $wrongScreen= $("body").addClass("game-over");
        setTimeout(function(){
            $wrongScreen.removeClass("game-over");
        },200); 
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    $("#level-title").text("Level "+level);
    userClickedPattern=[];
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    level++;
};

function startOver() {
    level=0
    gamePattern=[];
    started=false;
}