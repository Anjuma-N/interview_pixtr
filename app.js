
let x=Math.floor(Math.random()*232)+1;
document.getElementById('spr1').innerHTML=x;

let y=Math.floor(Math.random()*521)+1;
document.getElementById('spr2').innerHTML=y;

let z=Math.floor(Math.random()*1453)+1;
document.getElementById('spr3').innerHTML=z;

let d=Math.floor(Math.random()*32)+1;
document.getElementById('spr4').innerHTML=d;

//----------------------------------------------------------------------------------------------------------

document.addEventListener('scroll',()=>{
    const nav=document.querySelector('.navbar');

    if(window.scrollY>0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});

//----------------------------------------------------------------------------------------------------------

$("a").click(function(){
    $("a").css("color","");
    $(this).css("color","red");
    $(this).css("font-weight","bold");
});

//-----------------------------------------------------------------------------------------------------------