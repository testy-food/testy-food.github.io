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

    // trigger swiper [home section]

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // loading screen 

    $(".loader").fadeOut("slow")

    // add dark class to body

    $(".fa-moon").on("click", function() {

        $("body").toggleClass("dark")
        $(this).toggleClass("active")

    })

})