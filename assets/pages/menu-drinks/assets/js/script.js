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

    // food Gallery 

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


    // open food preview

    $(".slide").on("click",function() {

        let data = $(this).attr("data-name")

        $(".food-preview").each(function() {

            let target = $(this).attr("data-target")
            
            if (data == target) {
                $(".food-preview").removeClass("active")
                $(this).addClass("active")
                $(".food-preview-container").css("display", "flex")
                $(".food-preview-container").fadeIn("slow")
            }

        })

    })

    // close food preview

    $("#close-preview").on("click", function() {

        $(".food-preview-container").fadeOut("slow")
        
    })

    $(".food-preview-container").on("click", function () {

        $(this).fadeOut("slow")

    });

    
    // open drinks preview

    $(".slide").on("click",function() {

        let data = $(this).attr("data-name")

        $(".drinks-preview").each(function() {

            let target = $(this).attr("data-target")
            
            if (data == target) {
                $(".drinks-preview").removeClass("active")
                $(this).addClass("active")
                $(".drinks-preview-container").css("display", "flex")
                $(".drinks-preview-container").fadeIn("slow")
            }

        })

    })

    // close drinks preview

    $("#close-preview").on("click", function() {

        $(".drinks-preview-container").fadeOut("slow")
        
    })

    $(".drinks-preview-container").on("click", function () {

        $(this).fadeOut("slow")

    });

    // loading screen 

    $(".loader").fadeOut("slow")

    // add dark class to body

    $(".fa-moon").on("click", function() {

        $("body").toggleClass("dark")
        $(this).toggleClass("active")

    })


})