var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");
var masButton = document.getElementById("mas");
var menosButton = document.getElementById("menos");
var video = document.getElementById("video1");

playButton.addEventListener('click', function() {
    video.play();
});

pauseButton.addEventListener('click', function() {
    video.pause();

});

stopButton.addEventListener('click', function() {
    video.load();

    
});

masButton.addEventListener('click', function() {
    if (video.volume < 0.9) {
    video.volume += 0.1;
}
});

menosButton.addEventListener('click', function() {
    if (video.volume > 0.1) {
    video.volume -= 0.1;
}
});


function changeVideo() {
    var chosenFile = document.getElementById("file").files[0];
    document.getElementById("video1").setAttribute("src", URL.createObjectURL(chosenFile));

};

document.getElementById("file").addEventListener("change", changeVideo);

