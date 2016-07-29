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
<<<<<<< HEAD
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',*/
    direction: "vertical",
=======
  /*  prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',*/
>>>>>>> fef61929c298e3b6a8442153f91090783377f354

    loop:true,
    onSlideChangeEnd:function(swipe){
        var n=swipe.activeIndex,
            slideAry=swipe.slides;
        console.log(n);

        [].forEach.call(slideAry,function(item,index){
            console.log(slideAry.length,index);
            if(index==n){
<<<<<<< HEAD
                if(index==0){
                    item.id="page"+(slideAry.length-2);
                }else if(index==slideAry.length-1){

=======
                if(item.id=index==0){
                    item.id="page"+(slideAry.length-2);
                }else if(item.id=index==slideAry.length-1){
>>>>>>> fef61929c298e3b6a8442153f91090783377f354
                    item.id="page1"

                }else{
                    item.id="page"+index;
                    console.log(item.id)

                }
                item.id = null;
                return;
            }
            
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

