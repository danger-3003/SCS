var menu = document.getElementById("Menu");
var toggle = document.getElementById("toggle_icon");
let button = document.querySelectorAll(".nav_list");
button.forEach(element => {
    element.addEventListener('click',function()
    {
        if(!menu.classList.contains("fa-times"))
        {
            toggle.classList.replace("fa-times","fa-bars");
            menu.classList.replace("top-[68px]","top-[-345px]");
            // console.log(menu);
        }
        button.forEach(btn =>btn.classList.remove('underline'));
        this.classList.add('underline');
    })
});
toggle.addEventListener("click",()=>{  
    if(toggle.classList.contains('fa-bars'))
    {
        toggle.classList.replace("fa-bars","fa-times");
        menu.classList.replace("top-[-345px]","top-[68px]");
        menu.classList.add("opacity-100");
    }
    else
    {
        toggle.classList.replace("fa-times","fa-bars");
        menu.classList.replace("top-[68px]","top-[-345px]");
        menu.classList.add("opacity-0");
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