score=0;
cross =  true;
audiogo = new Audio('gameover.mp3');

document.onkeydown= function(e){
    console.log("Key Code is:", e.key)
    if(e.key=='ArrowUp'){ //up arrow key
        user = document.querySelector('.user');
        user.classList.add('animateuser');
  setTimeout(()=>{
user.classList.remove('animateuser')
  },700);
     }
     if(e.key=='ArrowRight'){ //right arrow key
        user = document.querySelector('.user');
        userX=parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
     user.style.left= userX+ 112 +"px";
}
if(e.key=='ArrowLeft'){ //left arrow key
    user = document.querySelector('.user');
    userX=parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
 user.style.left= (userX - 112 )+"px";
} }
 setInterval(( )=>{
    user=document.querySelector('.user');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(user,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
offsetX= Math.abs(dx-ox);
offsetY=Math.abs(dy-oy);
if(offsetX<93 && offsetY<52){
    gameOver.style.visibility='visible';
obstacle.classList.remove('obstacleAni');
audiogo.play()
setTimeout(()=>{
    audiogo.pause()
},4000)
}
else if(offsetX< 145 && cross){
    score+=1;
    updateScore(score);
    cross=false;
   setTimeout(() =>{
cross= true;
   },1000);
setTimeout(() =>{
    aniDur= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur= aniDur-0.1;
    obstacle.style.animationDuration= newDur + 's';
    
},500);

}
},10);

function updateScore(score){
scoreCount.innerHTML = "Your Score:" + score
 }