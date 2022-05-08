$(document).ready(function () {

    // responsive navbar

    $("#bars").on("click", function () {

        $("#bars").toggleClass("fa-times")
        $(".navbar").toggleClass("active")

    })

    // [mobile view] close navbar when scroll

    $(window).on("scroll", function () {

        $("#bars").removeClass("fa-times")
        $(".navbar").removeClass("active")

    })

    // open and close search view

    $("#search-icon").on("click", function() {

        $("#search-form").toggleClass("active")

    })

    $("#close").on("click", function() {

        $("#search-form").removeClass("active")

    })

    // loading screen 

    $(".loader").fadeOut("slow")

    // add dark class to body

    $(".fa-moon").on("click", function() {

        $("body").toggleClass("dark")
        $(this).toggleClass("active")

    })

    
    // review Gallery 

    var swiper = new Swiper(".myslider", {
        grabCursor:true,
        loop:true,
        centeredSlides:true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        },
    });

})