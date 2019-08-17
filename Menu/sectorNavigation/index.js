window.onload = function(){
    var home = document.getElementById('home');
    var imgs = document.getElementsByTagName('img');
    var onOff = true;
    var r= 200;

    function toLT( iR,iDeg ){
        return { 
            l:Math.round(Math.sin(iDeg/180*Math.PI)*iR),
            t:Math.round(Math.cos(iDeg/180*Math.PI)*iR)
        }
    }
    
    home.onclick = function(){
        if( onOff ){
            this.style.transform = "rotate(-720deg)";
            for( var i=0;i<imgs.length;i++ ){
                var olt=toLT(r,90/4*i);
                imgs[i].style.transition=0.3+i*0.1+"s";
                imgs[i].style.left=-olt.l+"px";
                imgs[i].style.top=-olt.t+"px";
                imgs[i].style.transform="rotate(-720deg)";
            }
        }else{
            this.style.transform = "rotate(720deg)";
            for(var i = 0; i < imgs.length; i++){
                imgs[i].style.transition = 0.3+(imgs.length-1-i)*0.1+"s";
                imgs[i].style.top = 0 + "px";
                imgs[i].style.left = 0 + "px";
                imgs[i].style.transform="rotate(720deg)";
            }

        }
        onOff = !onOff;
    }
}