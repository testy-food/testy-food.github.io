// reg popup 

$(".fa-user, .log a").on("click", function() {

    $(".reg").fadeIn();
    $(".log").fadeOut()

})

$(".reg, .log").on("click", function () {

    $(this).fadeOut("slow")

});

$(".reg .inner, .log .inner").on("click", function(e) {

    e.stopPropagation()

});

$(document).keydown(function(e) {

    if(e.keyCode == 27) {

        $(".reg, .log").fadeOut("slow");

    }

});

// reg validtiton

$(".reg input").on("keyup", function () {

    if($(this).val() !== "" && $(".password1").val() === $(".password2").val() ) {

        if ($(".password1").val() !== "" && $(".password1").val().length >= 8  ) {

            $(".reg-btn").removeClass("disabled");
            $(".reg-btn").removeAttr("disabled");

            $(".reg-btn").on("click", function() {

                $(this).attr("disabled", true);
                $(this).addClass("disabled");
                $(".password1").attr("disabled", true);
                $(".password2").attr("disabled", true);
                $(".reg input").attr("disabled", true);
                swal("Good job!", "You can Sign In Now!", "success");

            })

        } else {
            $(".reg-btn").addClass("disabled");
        }


    } else {

        $(".reg-btn").addClass("disabled");
    }

});    

// login popup

$(".reg a").on("click", function() {
    
    $(".reg").fadeOut()
    $(".log").fadeIn()
    
})

// login validtiton

$(".log input").on("keyup", function () {

    if($(".log-user").val() !== "" && $(".log-pass").val() !== ""  ) {

        $(".login-btn").removeClass("disabled");
        $(".login-btn").removeAttr("disabled");

    } else {

        $(".login-btn").addClass("disabled");
    }

});

$(".login-btn").on("click", function() {

    if ($(".log-user").val() == $(".reg-user").val() && $(".log-pass").val() == $(".password1").val() ) {

        $(".log").fadeOut();
        var name = "Welcome Back " + $(".reg-user").val() + "! Enjoy With Our Food";

        swal({
                title: "Nice!",
                text: name,
                icon: "success",
                confirmButtonText: "Cool"
        });

        
        $(".fa-user").fadeOut();
        $(".user-name").text($(".reg-user").val())
        $(".user-name").fadeIn()

    } else {

        swal ( "Oops" ,  "Something went wrong!" ,  "error" )

    }

});

// log out

$(".user-name").on("click", function() {

    var cancellogout = "Okay " + $(".log-user").val() + " Enjoy With Our Food";

    swal({
        title: "Are you sure To Log Out ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {

            $(".fa-user").fadeIn();
            $(".user-name").text(" ");
            $(".user-name").fadeOut();

            swal("Now You Are Logged Out, Login Again To continue Eating", {
            icon: "success",
        });
        } else {

            swal({
                title: "okay!",
                text: cancellogout,
                icon: "warning",
                confirmButtonText: "Cool"
            });

        }
    });

})

// stop form to submit

$(".fr").submit(function(e){
    e.preventDefault();
});