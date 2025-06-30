const clickSound = new Audio("ui-mouse-click-366460.mp3");
let count = 0; // Start at 0

function playSound(){
    clickSound.currentTime=0;
    clickSound.play();
}
document.querySelector("#increment").addEventListener("click", function(){
    tapIncrement();
    playSound();
});
function tapIncrement() {
    count++; 
    document.querySelector("#counter").textContent = count; // Show new value
}

document.querySelector("#decrement").addEventListener("click", function(){
    tapDecrement();
    playSound();
});
function tapDecrement() {
    count--; 
    document.querySelector("#counter").textContent = count; // Show new value
}


document.querySelector("#reset").addEventListener("click",function(){
    tapReset();
    playSound();
});
function tapReset(){
    count=0;
    document.querySelector("#counter").textContent=count;
}




    