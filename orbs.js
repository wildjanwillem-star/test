
const m={x:0,y:0};
document.addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});
for(let i=0;i<80;i++){
 const d=document.createElement('div');
 d.className='orb';
 document.body.appendChild(d);
 let x=Math.random()*innerWidth,y=Math.random()*innerHeight;
 (function loop(){
   let dx=x-m.x,dy=y-m.y,dist=Math.hypot(dx,dy);
   if(dist<120){x+=(dx/(dist||1))*2.5;y+=(dy/(dist||1))*2.5;}
   x+=Math.sin(Date.now()/1200+i)*0.2;
   y+=Math.cos(Date.now()/1100+i)*0.2;
   d.style.transform=`translate(${x}px,${y}px)`;
   requestAnimationFrame(loop);
 })();
}
