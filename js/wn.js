FastClick.attach(document.body);
~function(desW){
    var winW=document.documentElement.clientWidth;
    if(winW>desW){

        var oMain=document.querySelector(".swiper-container"),
            musicBox=document.querySelector(".musicBox");
        oMain.style.margin="0 auto";
        oMain.style.width=desW+"px";
        musicBox.style.width=desW+"px";
        return;

    }
    document.documentElement.style.fontSize=winW/desW*100+"px";

}(640);
var swipe1=new Swiper(".swiper-container",{

  /*  effect : 'cube',
    cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    },
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',*/
    direction: "vertical",

    loop:true,
    onSlideChangeEnd:function(swipe){
        var n=swipe.activeIndex,
            slideAry=swipe.slides;
        console.log(n);

        [].forEach.call(slideAry,function(item,index){
            console.log(slideAry.length,index);
            if(index==n){
                if(index==0){
                    item.id="page"+(slideAry.length-2);
                }else if(index==slideAry.length-1){

                    item.id="page1"

                }else{
                    item.id="page"+index;
                    console.log(item.id)

                }
                console.log(item.id);
                return;
            }
            item.id = null;
        })
    }
});

var music = document.getElementById("music");
var musicAudio = document.getElementById("musicAudio");
window.setTimeout(function(){
    musicAudio.play();
    musicAudio.addEventListener("canplay",function(){
        music.style.display="block";
    },false);
},1000);
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music musicMove";
        return;
    }
    musicAudio.pause();
    music.className="music";
},false);

