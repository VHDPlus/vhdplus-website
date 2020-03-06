window.onload = setNav;
window.onscroll = setNav;

function setNav(){
    var x = document.getElementsByClassName("navbar");
    if(window.location.pathname == "/" || window.location.pathname == ""){
        if(window.scrollY <= 100){
            x[0].style.pointerEvents = "none";
            x[0].style.backgroundColor = "transparent";
        }
        else{
            x[0].style.pointerEvents = "all";
            x[0].style.backgroundColor = "#20232a";
        }
    }
};