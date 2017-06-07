//
//   Config
            windowsX = 1366;
            windowsY = 768;
//
//
//
//
//
//

function Post(url) {
    var http = new XMLHttpRequest();
    //var url = "index.py";
    // var params = "lorem=ipsum&name=binny";
    http.open("POST", "py/index.py?"+url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
        }
    }
    http.send();
}
// function getScale(event){
// 	var x = event.screenX;
// 	var y = event.screenY;
// 	return x+':'+y;
// }
var lX = 0;
var lY = 0;
var mouseHold;
var Timer;
var Time = 0;
function load(){
    document.getElementById('videoCanvas').style = "height:"+window.innerHeight+"px;"+'margin-top: -14px;';
    document.body.style = "height:"+window.innerHeight+"px";
    // document.body.style.zoom ='25%';
}
document.onmousemove = function(e){
    var windows_x = windowsX;
    var windows_y = windowsY;
    var browser_x = document.body.clientWidth-2;
    var browser_y = document.body.clientHeight-2;
    x_nesbat = windows_x/browser_x;
    y_nesbat = windows_y/browser_y;
    X = e.pageX;
    Y = e.pageY;
    clearTimeout(Timer);
    Timer = setTimeout(function(){
        // console.log('Timer inner Function');
        if(lX!=X && lY!=Y) {
            // alert('mouse pointed');
            if(mouseHold){
                Post('x=' + Math.round(X * x_nesbat) + '&y=' + Math.round(Y * y_nesbat) + '&t=0&f=drag&v=left');
            }else
                Post('x=' + Math.round(X * x_nesbat) + '&y=' + Math.round(Y * y_nesbat) + '&t=0&f=move');
            lX = X;
            lY = Y;
        }
    },400);
    // if((X-10>=lX||lX>=X+10) && (Y-10>=lY||lY>=Y+10))
    //     Post('x='+Math.round(X*x_nesbat)+'&y='+Math.round(Y*y_nesbat)+'&t=0&f=move');
    // console.log('x is :'+X+' y is :'+Y)
    // alert('mouse GOne to '+browser_x*x_nesbat+':'+browser_y*y_nesbat);
}
document.addEventListener("click", function(e) {
    mouseHold = true;
    var windows_x = windowsX;//1366
    var windows_y = windowsY;//768
    var browser_x = document.body.clientWidth-2;
    var browser_y = document.body.clientHeight-2;
    x_nesbat = windows_x/browser_x;
    y_nesbat = windows_y/browser_y;
    X = e.pageX;
    Y = e.pageY;
    // if((X-10>=lX||lX>=X+10) && (Y-10>=lY||lY>=Y+10))
       
    // console.log('x is :'+X+' y is :'+Y
    // alert('mouse GOne to '+Math.round(X*x_nesbat)+':'+Math.round(Y*y_nesbat));
    // lY = Y;
    // lX = X;

    var Time2 = Math.round(Date.now()/100);
    if(Time2 - Time > 5)
        Post('x='+Math.round(X*x_nesbat)+'&y='+Math.round(Y*y_nesbat)+'&t=0&f=click');
    else
        Post('x='+Math.round(X*x_nesbat)+'&y='+Math.round(Y*y_nesbat)+'&t=0&f=click&v=double');
    Time = Math.round(Date.now()/100);
});
mouseHold = false;

document.addEventListener("contextmenu", function(e) {
    var windows_x = windowsX;//1366
    var windows_y = windowsY;//768
    var browser_x = document.body.clientWidth-2;
    var browser_y = document.body.clientHeight-2;
    x_nesbat = windows_x/browser_x;
    y_nesbat = windows_y/browser_y;
    X = e.pageX;
    Y = e.pageY;
    // if((X-10>=lX||lX>=X+10) && (Y-10>=lY||lY>=Y+10))
    Post('x='+Math.round(X*x_nesbat)+'&y='+Math.round(Y*y_nesbat)+'&t=0&f=click&v=3');
    // console.log('x is :'+X+' y is :'+Y
    // alert('mouse GOne to '+Math.round(X*x_nesbat)+':'+Math.round(Y*y_nesbat));
    // lY = Y;
    // lX = X;
});

document.onmouseup = function(e){
    mouseHold = false;
}
function Onmouseover() {
    document.getElementById('toolbar').style = 'margin-top:0px;';
    document.getElementById('push').style = 'display:none';
}
function Onmouseleave() {
    document.getElementById('toolbar').style = 'margin-top:-42px;';
    document.getElementById('push').style = 'display:block';
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 8  && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=backspace");
    }
    if (e.keyCode == 9  && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=tab");
    }

    if (e.keyCode == 13 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=enter");
    }

    if (e.keyCode == 16 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=shift");
    }

    if (e.ctrlKey && e.keyCode == 97){
        e.preventDefault();
        Post("?f=press&v=ctrl.a");
    }

    if (e.ctrlKey && e.keyCode == 99){
        e.preventDefault();
        Post("?f=press&v=ctrl.c");
    }

    if (e.ctrlKey && e.keyCode == 115){
        e.preventDefault();
        Post("?f=press&v=ctrl.s");
    }

    if (e.ctrlKey && e.keyCode == 118){
        e.preventDefault();
        Post("?f=press&v=ctrl.v");
    }

    if (e.ctrlKey && e.keyCode == 122){
        e.preventDefault();
        Post("?f=press&v=ctrl.z");
    }
    
    if (e.keyCode == 18 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=alt");
    }

    if (e.keyCode == 19 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=pause");

    }

    if (e.keyCode == 20 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=capslock");
    }

    if (e.keyCode == 27 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=escape");
    }

    if (e.keyCode == 33 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=pageup");
    }

    if (e.keyCode == 34 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=pagedown");
    }

    if (e.keyCode == 35 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=end");
    }

    if (e.keyCode == 36 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=home");
    }

    if (e.keyCode == 37 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=left");
    }

    if (e.keyCode == 38 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=up");
    }

    if (e.keyCode == 39 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=right");
    }

    if (e.keyCode == 40 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=down");
    }

    if (e.keyCode == 45 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=insert");
    }

    if (e.keyCode == 46 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=delete");
    }

    if (e.keyCode == 91 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=winleft");
    }

    if (e.keyCode == 92 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=winright");
    }

    if (e.keyCode == 93 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=select");
    }

    if (e.keyCode == 96 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num0");
    }

    if (e.keyCode == 97 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num1");
    }

    if (e.keyCode == 98 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num2");
    }

    if (e.keyCode == 99 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num3");
    }

    if (e.keyCode == 100 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num4");
    }

    if (e.keyCode == 101 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num5");
    }

    if (e.keyCode == 102 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num6");
    }

    if (e.keyCode == 103 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num7");
    }

    if (e.keyCode == 104 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num8");
    }

    if (e.keyCode == 105 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=num9");
    }

    if (e.keyCode == 106 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=multiply");
    }

    if (e.keyCode == 107 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=add");
    }

    if (e.keyCode == 109 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=subtract");
    }

    if (e.keyCode == 110 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=decimal");
    }

    if (e.keyCode == 111 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=divide");
    }

    if (e.keyCode == 112 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f1");
    }

    if (e.keyCode == 113 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f2");
    }

    if (e.keyCode == 114 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f3");
    }

    if (e.keyCode == 115 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f4");
    }

    if (e.keyCode == 116 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f5");
    }

    if (e.keyCode == 117 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f6");
    }

    if (e.keyCode == 118 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f7");
    }

    if (e.keyCode == 119 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f8");
    }

    if (e.keyCode == 120 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f9");
    }

    if (e.keyCode == 121 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f10");
    }

    if (e.keyCode == 122 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f11");
    }

    if (e.keyCode == 123 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=f12");
    }

    if (e.keyCode == 144 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=numlock");
    }

    if (e.keyCode == 145 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=scrolllock");
    }

    if (e.keyCode == 186 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=;");
    }

    if (e.keyCode == 187 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v==");
    }

    if (e.keyCode == 188 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=,");
    }

    if (e.keyCode == 189 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=-");
    }

    if (e.keyCode == 190 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=.");
    }

    if (e.keyCode == 191 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=/");
    }

    if (e.keyCode == 192 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=`");
    }

    if (e.keyCode == 219 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=[");
    }

    if (e.keyCode == 220 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=\\");
    }

    if (e.keyCode == 221 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v=]");
    }

    if (e.keyCode == 222 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Post("?f=press&v='");
    }
}, false);