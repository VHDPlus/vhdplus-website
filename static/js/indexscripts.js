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

window.onload = function(){
    this.setNav();
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");

    var slick = window.slider;

    slick.current.slickGoTo(0);

    slide1.onclick = function(){
        slick.current.slickGoTo(0);            
    }
    slide2.onclick = function(){
        slick.current.slickGoTo(1);        
    }
    slide3.onclick = function(){
        slick.current.slickGoTo(2);        
    }
}