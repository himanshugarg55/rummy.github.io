
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (watchVideoButtonAutoSize) {
    $('#text1').textfill({
        maxFontPixels: 500
    });
}
else
{
    document.querySelector("#text1").style.fontSize = watchVideoButtonFontSize;
}

if (playPongButtonAutoSize) {
    $('#text2').textfill({
        maxFontPixels: 500
    });
}
else
{
    document.querySelector("#text2").style.fontSize = playPongButtonFontSize;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(() => {
    var width1 = document.querySelector(".awtCanvas2").clientWidth;
    var size = 1.5;

    document.querySelector("html").style.fontSize = ((width1 / 100) * size) + "px";
}, 200);

function f2()
{
    var agw = Math.sqrt(awtCanvas2.clientWidth * awtCanvas2.clientHeight) / 100;
    
    var var1 = 1.5;
    var agv = Math.sqrt($(window).width() * $(window).height()) / (100 * var1);

    document.documentElement.style.setProperty('--agw', `${agw}px`);
    document.documentElement.style.setProperty('--agwww', `${agw}`);
    document.documentElement.style.setProperty('--agv', `${agv}px`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var maximize = false;

var portraitMode = false;
var landscapeMode = false;

var awtCanvas1 = document.querySelector(".awtCanvas1");
//var awtBackground = document.querySelector(".awtBackground");
var awtGameCanvas = document.querySelector(".awtGameCanvas");
var awtCanvas2 = document.querySelector(".awtCanvas2");

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
    //var widthScale = $(awtBackground).width() / width2;
    //var heightScale = $(awtBackground).height() / height2;
    //return Math.min(widthScale, heightScale);
};

function getScale2() {
    var widthScale = $(window).width() / width;
    var heightScale = $(window).height() / height;
    return Math.min(widthScale, heightScale);
};

function f1() {

    if((($(window).height() / $(window).width()) > (maxAspectRatioHeight / maxAspectRatioWidth)) && (options==1 || options==3))
    {
        width = maxAspectRatioWidth;
        height = maxAspectRatioHeight;

        maximize = false;
    }
    else if((($(window).height() / $(window).width()) < (minAspectRatioHeight / minAspectRatioWidth)) && (options==2 || options==3))
    {
        width = minAspectRatioWidth;
        height = minAspectRatioHeight;

        maximize = false;
    }
    else if (options==0)
    {
        width = fixedAspectRatioWidth;
        height = fixedAspectRatioHeight;

        maximize = false;
    }
    else
    {
        maximize = true;
        awtCanvas2.style.height = "100%";
        awtCanvas2.style.width = "100%";
        //awtBackground.style.height = "100%";
        //awtBackground.style.width = "100%";
        awtGameCanvas.style.width = "100%";
        awtGameCanvas.style.height = "100%";
    }

    if(!maximize)
    {
        resize();
    }

    f2();

    if(($(awtCanvas2).height() / $(awtCanvas2).width()) > 1)
    {
        if (!portraitMode && !unityInstantiated)
        {
            document.querySelector("#storeLinks_portraitMode").style.display = "flex";
            document.querySelector("#storeLinks_landscapeMode").style.display = "none";
    
            document.querySelector("#socialLinks_portraitMode").style.display = "flex";
            document.querySelector("#socialLinks_landscapeMode").style.display = "none";
    
            document.querySelector("#privacy").classList.remove("footerItemText");
            document.querySelector("#terms").classList.remove("footerItemText");
            document.querySelector("#copyright").classList.remove("footerItemText");

            document.querySelector("#privacy").classList.add("footerItemText_portraitMode");
            document.querySelector("#terms").classList.add("footerItemText_portraitMode");
            document.querySelector("#copyright").classList.add("footerItemText_portraitMode");

            document.querySelector("#companyLogo").classList.remove("companyLogo");
            document.querySelector("#companyLogo").classList.add("companyLogo_portraitMode");

            document.querySelector("#fullscreenButton").style.bottom = "auto";

            portraitMode = true;
            landscapeMode = false;
        }
    }
    else
    {
        if (!landscapeMode && !unityInstantiated)
        {
            document.querySelector("#storeLinks_portraitMode").style.display = "none";
            document.querySelector("#storeLinks_landscapeMode").style.display = "flex";

            document.querySelector("#socialLinks_portraitMode").style.display = "none";
            document.querySelector("#socialLinks_landscapeMode").style.display = "block";

            document.querySelector("#privacy").classList.add("footerItemText");
            document.querySelector("#terms").classList.add("footerItemText");
            document.querySelector("#copyright").classList.add("footerItemText");

            document.querySelector("#privacy").classList.remove("footerItemText_portraitMode");
            document.querySelector("#terms").classList.remove("footerItemText_portraitMode");
            document.querySelector("#copyright").classList.remove("footerItemText_portraitMode");

            document.querySelector("#companyLogo").classList.add("companyLogo");
            document.querySelector("#companyLogo").classList.remove("companyLogo_portraitMode");

            document.querySelector("#fullscreenButton").style.bottom = "0";

            landscapeMode = true;
            portraitMode = false;
        }
    }
}

function resize() {
    var scale = getScale2();

        //awtBackground.style.height = height * scale + "px";
        //awtBackground.style.width = width * scale + "px";

    awtGameCanvas.style.height = height * scale + "px";
    awtGameCanvas.style.width = width * scale + "px";
    
    awtCanvas2.style.height = height * scale + "px";
    awtCanvas2.style.width = width * scale + "px";
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
  
  var showProgress = document.querySelector(".progressText").style.display
  ;;

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
