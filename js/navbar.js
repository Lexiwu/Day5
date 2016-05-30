$(function () {

    ////gotop effect

    $("#gotop").click(function () {
        jQuery("html,body").animate({ scrollTop: 0 }, 800);

    });
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $("#gotop").fadeIn();
        }
        else {
            $("#gotop").stop().fadeOut();
        }
    });



    ////navbar effect

    $("#story").click(function () {
        $('html,body').animate({ scrollTop: $('.billboard').offset().top }, 600);

    });

    $("#menu").click(function () {
        $('html,body').animate({ scrollTop: $('.main-menu').offset().top }, 600);
    });

    $("#reservation").click(function () {
        $('html,body').animate({ scrollTop: $('.res-info').offset().top }, 600);
    });


    //////下拉式選單
    document.getElementById("news").onclick = function () {

        document.getElementById("dropdown").classList.toggle("show");
    };

    document.getElementById("reviews").onclick = function () {

        document.getElementById("reviews-dropdown").classList.toggle("show");
    };


    // Close the dropdown if the user clicks outside of it


    window.onclick = function (event) {

        if (!event.target.matches('#news')) {

            var dropdowns = document.getElementsByClassName("news-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }

        if (!event.target.matches('#reviews')) {

            var dropdowns = document.getElementsByClassName("reviews-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }






});