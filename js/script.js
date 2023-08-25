// Nav Button js Start Here
let crossBtn = document.querySelector(".nav_X");
let navArea = document.querySelector("#navbarSupportedContent");

crossBtn.addEventListener("click", () => {
    navArea.classList.toggle("show");
});


// Menu Fix js Start Here
$(function () {
    var navOff = $('.navbar').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            $('.navbar').addClass('menu_fix');
        } else {
            $('.navbar').removeClass('menu_fix');
        }
    });
});