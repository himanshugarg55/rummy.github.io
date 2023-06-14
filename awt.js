
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var maximize = false;

var portraitMode = false;
var landscapeMode = false;

var awtCanvas1 = document.querySelector(".awtCanvas1");
var awtBackground = document.querySelector(".awtBackground");
var awtGameCanvas = document.querySelector(".awtGameCanvas");
//var awtCanvas2 = document.querySelector(".awtCanvas2");

var lastWidth = 0;
var lastHeight = 0;

var width2 = 0;
var height2 = 0;

var awtCanvas1 = document.querySelector(".awtCanvas1")
style = window.getComputedStyle(awtCanvas1),
widthstr = style.getPropertyValue('width');
heightstr = style.getPropertyValue('height');

width2 = parseInt(widthstr.replace(/px/g, ""));
height2 = parseInt(heightstr.replace(/px/g, ""));

f1();

window.addEventListener('resize', resize2);

checkOrientationMode();

setInterval1 = setInterval(() =>
{
    checkOrientationMode();
}, 200);

var deviceOrientation = "";

function checkOrientationMode()
{
    if (window.matchMedia("(orientation: landscape)").matches)
    {
        if(deviceOrientation != "landscape")
        {
            deviceOrientation = "landscape";
            resize2();
        }
    }
    else if (window.matchMedia("(orientation: portrait)").matches)
    {
        if(deviceOrientation != "portrait")
        {
            deviceOrientation = "portrait";
            resize2();
        }
    }
}

function resize2() {
    f1();
}

function getScale() {
    var widthScale = $(awtBackground).width() / width2;
    var heightScale = $(awtBackground).height() / height2;
    return Math.min(widthScale, heightScale);
};

function getScale2() {
    var widthScale = $(window).width() / width;
    var heightScale = $(window).height() / height;
    return Math.min(widthScale, heightScale);
};

function f1() {

		maximize = true;
        //awtCanvas2.style.height = "100%";
        //awtCanvas2.style.width = "100%";
        awtBackground.style.height = "100%";
        awtBackground.style.width = "100%";
        awtGameCanvas.style.width = "100%";
        awtGameCanvas.style.height = "100%";

    if(!maximize)
    {
        resize();
    }

   

    
}

function resize() {
    var scale = getScale2();

        awtBackground.style.height = height * scale + "px";
        awtBackground.style.width = width * scale + "px";

    awtGameCanvas.style.height = height * scale + "px";
    awtGameCanvas.style.width = width * scale + "px";
    
    //awtCanvas2.style.height = height * scale + "px";
    //awtCanvas2.style.width = width * scale + "px";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function request_fullscreen () {
    $(document).ready(function()
    {
          var el = document.querySelector("body");

          var entered;
          entered = el.requestFullscreen ? (el.requestFullscreen(),
          true) : el.msRequestFullscreen ? (el.msRequestFullscreen(),
          true) : el.mozRequestFullScreen ? (el.mozRequestFullScreen(),
          true) : el.webkitRequestFullscreen ? (el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
          true) : false;
    });
  }
  
  function is_fullscreen() {
          return !(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement)
  }

  function exit_fullscreen() {
          if (document.exitFullscreen) {
               document.exitFullscreen()
          } else if (document.msExitFullscreen) {
               document.msExitFullscreen()
          } else if (document.mozCancelFullScreen) {
               document.mozCancelFullScreen()
          } else if (document.webkitExitFullscreen) {
               document.webkitExitFullscreen()
          }
  }

  function toggle_fullscreen() {
          if (is_fullscreen()) {
              exit_fullscreen();
          } else {
              request_fullscreen();
          }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  var showProgress = document.querySelector(".progressText").style.display;

  if (!startToLoadButton)
  {
      startToLoad();
  }
  else
  {
    document.querySelector(".progressText").style.display = "none";
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(checkActiveElement, 1000);

var hasActiveElement = false;
var hasActiveElement2 = 0;

function checkActiveElement ()
{
    if (document.activeElement != document.querySelector('body'))
    {
        if (!hasActiveElement)
        {
            hasActiveElement2 = 1;
            hasActiveElement = true;
        }
    }
    else
    {
        if (hasActiveElement)
        {
            hasActiveElement2 = 0;
            hasActiveElement = false;
        }
    }
}
