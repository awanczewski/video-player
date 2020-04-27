var video = document.querySelector(".video");
var icn = document.getElementById("icon-play-pause");
var progressBar = document.querySelector(".progress-bar");
var volumeBar = document.querySelector(".volume-bar");
var icn2 = document.getElementById("icon-mute-unmute");
var resDiv = document.getElementById("res-div")
var formatNow = "wide";
var resolutionNow = "720p"
var wideP = document.getElementById("w")
var standardP = document.getElementById("s")
function playPause()
{
    if(video.paused)
    {
        icn.className = "fas fa-pause";
        video.play();
    }
    else
    {
       icn.className = "fas fa-play";
       video.pause();
    }
}

function muteUnmute()
{
    if(video.muted)
    {
        icn2.className = "fas fa-volume-up";
        video.muted = false;
    }
    else
    {
        icn2.className = "fas fa-volume-mute";
        video.muted = true;
    }
}

function toggleFullscreen()
{
    if(document.fullscreenElement === null)
    {
        video.requestFullscreen();
    }
    else
    {
        document.exitFullscreen();
    }
}

video.addEventListener('timeupdate', function()
{
    var progressPos = video.currentTime / video.duration;
    progressBar.value = progressPos * 100;
    if(video.ended)
    {
        icn.className = "fas fa-play";
    }
})

function changeCurrentTime()
{
    video.currentTime = (progressBar.value * video.duration) / 100;
}

function changeFormat(n)
{
    if(n != formatNow)
    {
        formatNow = n;
        video.src="media/" + formatNow + "_" + resolutionNow + ".mp4";
        video.load();
        video.play();
        if(formatNow == 'wide')
        {
            wideP.style.transform = "scale(1.25)";
            standardP.style.transform ="scale(1)";
        }
        else
        {
            wideP.style.transform = "scale(1)";
            standardP.style.transform ="scale(1.25)";
        }  
    }

}

function changeVolume()
{
    video.volume = volumeBar.value / 100;
    if(video.volume == 0)
    {
        icn2.className = "fas fa-volume-mute";
    }
    else
    {
        icn2.className = "fas fa-volume-up";
    }
}

function changeDisplay()
{
    if(resDiv.style.display == "block")
    {
        resDiv.style.display = "none";
    }
    else
    {
        resDiv.style.display = "block";
    }
}

function changeResolution(n)
{
    if(n != resolutionNow)
    {
      resolutionNow = n;
      video.src="media/" + formatNow + "_" + resolutionNow + ".mp4";
      video.load();
      video.play();
      resDiv.style.display = "none";
    }
}
