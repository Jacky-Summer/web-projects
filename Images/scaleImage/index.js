window.onload = function(){
    var normal = document.getElementById("normal");
    var lay = document.getElementById("lay");
    var scaleImg = document.getElementById("scaleImg");
    var img = scaleImg.getElementsByTagName('img')[0];

    normal.onmouseover = function(){
        lay.style.display = "block";
        scaleImg.style.display = "block";
    }

    normal.onmouseout = function(){   
        lay.style.display = "none";
        scaleImg.style.display = "none";
    }

  normal.onmousemove = function(ev){

        var ev = ev || event;
        var scale = 4; //图片的放缩比例 
        //将鼠标放到放大镜的中间 
        var x = ev.clientX - lay.offsetWidth/2 - normal.offsetLeft;
        var y = ev.clientY - lay.offsetHeight/2 - normal.offsetTop;

        //将放大镜的宽高与盒子的宽高结合起来按比例放缩 
        lay.style.width = parseInt(normal.offsetWidth / scale) + "px";
        lay.style.height = parseInt(normal.offsetHeight / scale) + "px";
        //设置放大图片的宽高 
        img.style.width = normal.offsetWidth * scale + "px";
		img.style.height = normal.offsetHeight * scale + "px";
       
        //设置超出边界问题
        if( x < 0 ){
            x = 0; //左边界的判断，当超出时将x置为0; 
        }
        if( x >= normal.offsetWidth - lay.offsetWidth ){
            x = normal.offsetWidth - lay.offsetWidth; //右边界的判断，当超出时将x置为Box的宽度减去放大镜的宽度; 
        }
        if( y < 0 ){
            y = 0; //上边界的判断，当超出时将y置为0;
        }
        if( y >= normal.offsetHeight - lay.offsetHeight ){
            y = normal.offsetHeight - lay.offsetHeight;  //下边界的判断，当超出时将y置为Box的高度减去放大镜的高度;
        }
        //放大镜随鼠标移动
        lay.style.left = x + "px";
        lay.style.top = y + "px";

        img.style.top = y + "px";
        img.style.left = x + "px";

        //同比例放缩，大的盒子图片的放缩比例，当小盒子向右移动的时候，大盒子向左移动同等的比例的宽高，方向是相反的;
        var left = scale * lay.offsetLeft;
        var top = scale * lay.offsetTop;
        img.style.left = -left + "px";
        img.style.top = -top + "px";


  }

}