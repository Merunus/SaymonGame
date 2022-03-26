let buttonColors  = ["red","blue","green","yellow"];

let gamePattern = [];

var userClickedPattern = [];

// Main function 

$(".btn").click(function() {
    
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor)

})


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    


    let randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor)
    
}

// Interactive with buttons 


// Sounds 
function playSound(name) {
    let audio = new Audio(name + ".mp3");
    audio.play();
    audio.volume = 0.2

}

// Animation on click 

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed")
    
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    },100)
}