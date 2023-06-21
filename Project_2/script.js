var toggle = document.getElementById("toggle_icon");
var menu = document.getElementById("Menu");
toggle.addEventListener("click",()=>{
    console.log("hello");
    if(toggle.classList.contains('fa-bars'))
    {
        toggle.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle.classList.replace("fa-times","fa-bars");
    }
})