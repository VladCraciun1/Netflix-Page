let navBar = document.getElementById("navigationBar");
let scrollLeftBtn = document.getElementById('buttonLeftButton');
let scrollRightBtn = document.getElementById('buttonMoveRight');
let scrollMovie = document.getElementById('scrollMovie');
let code = document.getElementById('codeNumber')

// transition nav bar
window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll > 10) {
        navBar.style.backgroundColor = "black";
    } else if (scroll > -10) {
        navBar.style.backgroundColor = "";
    }
};

// Scroll left/right movie
scrollLeftBtn.addEventListener('click', function () {
    scrollMovie.scrollLeft += 500;

});
scrollRightBtn.addEventListener('click', function () {
    scrollMovie.scrollLeft -= 500;
});


// Service Code Number
code.addEventListener('click', function () {
    code.innerHTML = "071-114";
});



