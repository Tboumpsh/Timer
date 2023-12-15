let p = document.getElementById("paragraph");
let start = document.getElementById("start");
let end = document.getElementById("end");
let reset = document.getElementById("reset");
let timer;
start.addEventListener("click", () => {
 timer = setInterval(TimeHandel, 1000);
});
end.addEventListener('click' , ()=>
{
    clearInterval(timer);
    
})
reset.addEventListener('click' , ()=>{
  p.innerHTML = '0'
}
)
function TimeHandel() {
  let number = Number(p.innerHTML) + 1;
  p.innerHTML = number;
}

