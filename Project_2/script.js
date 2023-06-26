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
function menu_card()
{
    let menu_cards=document.getElementById("menu_cards");
    let menu_card1=document.querySelector(".menu_card1");
    let menu_card2=document.querySelector(".menu_card2");
    let view_more = document.getElementById("view_more");
    menu_cards.classList.toggle("p-10");
    console.log(menu_cards);
    menu_cards.classList.toggle("h-auto");
    menu_cards.classList.toggle("gap-7");
    if (view_more.innerText === "View More")
    {
        view_more.innerText="View Less";
        menu_card1.classList.replace("h-0","h-72");
        menu_card2.classList.replace("h-0","h-72");
    }
    else
    {
        view_more.innerText="View More";
        menu_card1.classList.replace("h-72","h-0");
        menu_card2.classList.replace("h-72","h-0");
    }
}