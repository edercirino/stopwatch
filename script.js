let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let startTime; //Keep track of the start time
let stopWatchInterval; // keep track of interval
let elapsedPausedTime = 0; // keep track of thje elapsed time while stopped

startButton.addEventListener('click', function(){
    if(!stopWatchInterval){
        startTime = new Date().getTime() - elapsedPausedTime;
        //get the starting time by subtracting the elapsed paused
        stopWatchInterval = setInterval(updateStopWatch, 1000); //update every second
    }

});

stopButton.addEventListener('click', function(){
    clearInterval(stopWatchInterval); //stop the interval
    elapsedPausedTime = new Date().getTime - startTime; //calculate elapsed paused time
    stopWatchInterval = null; //reset the interval variable

});

resetButton.addEventListener('click', function(){
    stopButton; //stop the interval
    elapsedPausedTime = 0; //reset the elapsed paused time variable
    document.getElementById("display").innerHTML = "00:00:00"; //reset display

});

function updateStopWatch(){
    let currentTime = new Date().getTime(); //get Current time in milliseconds
    let elapsedTime = currentTime - startTime; //calculate elapsed time in milliseconds
    let seconds = Math.floor(elapsedTime / 1000); //calculate seconds
    let minutes = Math.floor(elapsedTime / 1000 / 60); //calculate minutes
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60); //calculate hours
    let displayTime = pad(hours) + ":"  + pad(minutes) + ":" + pad(seconds); //format display time
    document.getElementById("display").innerHTML = displayTime; //update the display
}

function pad(number){
    //add a number 0 if the number is less than 10
    return (number < 10 ? "0" : "") + number;
}