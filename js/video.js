var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
    document.querySelector(".video").setAttribute("autoplay", "false");
    console.log("Auto play is set to false");
    document.querySelector(".video").setAttribute("loop", "false");
    console.log("Looping is set to false");
});

window.onload=function(){
    var vid = document.querySelector(".video");
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        vid.play();
        var vol = document.querySelector("#slider").value;
        document.querySelector("#volume").textContent = vol + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        vid.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow down video");
        var currSlow = vid.playbackRate;
        vid.playbackRate = currSlow * .90;
        console.log("Speed is " + vid.playbackRate)
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed up video");
        var currFast = vid.playbackRate;
        vid.playbackRate = currFast + .09;
        console.log("Speed is " + vid.playbackRate)
    });

    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip ahead");
        var length = vid.duration;
        var currTime = vid.currentTime;
        var newTime = currTime + 10;
        if(newTime <= length) {
            vid.currentTime = newTime;
        } else {
            vid.currentTime = 0;
        }
        console.log("Video current time is " + vid.currentTime)
    });

    document.querySelector("#mute").addEventListener("click", function() {
        var curVal = document.querySelector("#mute").innerHTML;
        if(curVal == "Mute") {
            console.log("Mute")
            document.querySelector("#mute").innerHTML = "Unmute";
           vid.muted = true;
        } else {
            console.log("Unmute")
            document.querySelector("#mute").innerHTML = "Mute";
            vid.muted = false;
        }
    });

    document.querySelector("#slider").addEventListener("click", function() {
        var value = document.querySelector("#slider").value;
        console.log("The current value is " + value/100)
        vid.volume *= value/100;
        document.querySelector("#volume").textContent = value + "%";
        console.log(document.querySelector("#volume"))
    });


    document.querySelector("#vintage").addEventListener("click", function() {
        vid.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        vid.classList.remove("oldSchool");
    });
}



