/**
 * Created by apple on 2017/2/17.
 */
document.addEventListener("DOMContentLoaded",function(){
    var oBox=document.querySelector('#box');
    var oP1=document.querySelector('.page1');
    var oP2=document.querySelector('.page2');
    var oFront=document.querySelector('.front');
    var oBack=document.querySelector('.back');
    var iNow=0;

    oBox.onclick=function(){
        oP1.style.transform='perspective(800px)  rotateY(-180deg)';
        oP1.style.transition='1s all ease';
    };
    oBox.addEventListener('transitionend',function(){
        oP1.style.transition='none';
        oP1.style.transform='perspective(00px)  rotateY(0deg)';

        iNow++;
        oBox.style.backgroundImage='url("img/'+iNow%3+'.jpg")';
        oFront.style.backgroundImage='url("img/'+iNow%3+'.jpg")';
        oBack.style.backgroundImage='url("img/'+(iNow+1)%3+'.jpg")';
        oP2.style.backgroundImage='url("img/'+(iNow+1)%3+'.jpg")';

    },false)
});