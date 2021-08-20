console.log("page loaded...");

var x = document.getElementById("myVideo");

document.getElementById("myVideo").muted = true;

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}