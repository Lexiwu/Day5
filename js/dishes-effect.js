$(function () {

    //dishes effect

    $(document).ready(function () {
        if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img").click(function (e) {
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img").hasClass("hover")) {
                    $(this).closest(".img").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".img").mouseenter(function () {
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function () {
                $(this).removeClass("hover");
            });
        }
    });




    //gallery effect

      $(function () {
          var elem = document.querySelector('.m-p-g');
          
          var gallery = new MaterialPhotoGallery(elem);
      });

    document.addEventListener('DOMContentLoaded', function () {

    });


    ///rating effect

    $(".my-rating").starRating({
        totalStars:5,
        starSize: 15,
        activeColor: "gold",
        strokeWidth:0,
        callback: function (currentRating, $el) {
            // make a server call here
        }
    });
  
});
