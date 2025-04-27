

// nav--------------------
function toggleMenu(x) {
    x.classList.toggle("change");

    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");

} 

// nach Oben button -----
let mybutton = document.getElementById("oBtn");

window.onscroll = function(){scrollFunktion()};

function scrollFunktion(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function obenFunktion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
