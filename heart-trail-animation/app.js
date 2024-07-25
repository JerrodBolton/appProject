// the first th9ing that we need is the body element.
// this code truck what the mouse id doing and give it a values
const bodyE1 =document.querySelector("body"); 

bodyE1.addEventListener("mousemove", (event) =>{
    // console.log(event.offsetY); 
  
    const yPos = event.offsetY;
    // This is going to give you the position for Y line
    // console.log(event.offsetX);   
    const xPos = event.offsetX;
    // This is going to give you the position for X line
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanE1.style.width = size + "px"; 
    spanE1.style.height  = size + "px"; 

    bodyE1.appendChild(spanE1)
    setTimeout(()=> {
        spanE1.remove();

    }, 3000);

})