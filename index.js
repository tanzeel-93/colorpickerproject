
let col=document.getElementById("color");
let text=document.querySelector("#text");
let cap=document.querySelector("#cap");
let p=document.querySelector("p");
let car=document.getElementById("con");
col.addEventListener("input",()=>{
    let co=col.value;
    text.value=co
    document.getElementById("con").style.backgroundColor=co
    // document.con.style.backgroundColor=co
    cap.style.color=co
    cap.style.boxShadow=` 12px 12px 20px black`
    // p.style.color=co
setTimeout(() => {
    
}, 2000);

// setTimeout(() => {
//     car.value=""
// }, 2000);

})