const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});

const button = document.querySelector(".btn");

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 20px #38bdf8";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#111827";

}else{

header.style.background="#1f2937";

}

});
