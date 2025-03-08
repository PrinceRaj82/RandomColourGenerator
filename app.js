let heading=document.querySelector("h3");
let div=document.querySelector('div');
let btn=document.querySelector('button');
let txt=document.querySelector('div p')
let t=document.createElement('p');
t.innerText="Updated Color"
btn.addEventListener("click",color)

function color(){
    let color=getcolor()
    heading.innerText=color;
    div.style.backgroundColor=color;
    btn.style.backgroundColor=color;
    txt.innerText=color;
    div.appendChild(t);
    
}
function getcolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
    }

