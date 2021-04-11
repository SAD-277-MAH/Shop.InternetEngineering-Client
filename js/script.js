function ToggleMenu() {
    const togglemenu = document.querySelector('.menu-cat');
    togglemenu.classList.toggle('active')
}

$(document).ready(function () {

    $('.div-category').mouseover(function () {
        $('.div-category-list').show();
    });
    
    $('.div-category-list').mouseover(function () {
        $('.div-category-list').show();
    });
    
    $('.div-category-list').mouseout(function () {
        $('.div-category-list').hide();
    });

    // for slideshow :

    var slideCount = $(".dii").length;

    var slideWidth = $(".dii").width();

    var slideHeight = $(".dii").height();

    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({
        width: slideWidth * 4,
        height: slideHeight
    });

    $("#itemsli").css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $(".dii:first-child").appendTo("#itemsli");

    function moveLeft() {
        $("#itemsli").animate({
            left: +slideWidth
        }, 500, function () {
            $(".dii:last-child").prependTo("#itemsli");
            $("#itemsli").css('left', '0');
        });
    }

    function moveRight() {
        $("#itemsli").animate({
            left: -slideWidth
        }, 500, function () {
            $(".dii:first-child").appendTo("#itemsli");
            $("#itemsli").css('left', '0');
        });
    }

    $("a.control_next").click(function (e) {
        moveRight();
    });

    $("a.control_prev").click(function (e) {
        moveLeft();
    });

    // bs shildeshow :

    var slideBSCount = $(".div-item-bs").length;

    var slideBSWidth = $(".div-item-bs").width();

    var slideBSHeight = $(".div-item-bs").height();

    var sliderUlBSWidth = slideBSCount * slideBSWidth;

    $("#slider-bs").css({
        width: "100%",
        height: slideBSHeight
    });

    $("#slideshow-bs").css({
        width: sliderUlBSWidth,
        marginLeft: -slideBSWidth
    });

    $(".div-item-bs:first-child").appendTo("#slideshow-bs");

    function moveLeftBS() {
        $("#slideshow-bs").animate({
            left: +slideBSWidth
        }, 500, function () {
            $(".div-item-bs:last-child").prependTo("#slideshow-bs");
            $("#slideshow-bs").css('left', '0');
        });
    }

    function moveRightBS() {
        $("#slideshow-bs").animate({
            left: -slideBSWidth
        }, 500, function () {
            $(".div-item-bs:first-child").appendTo("#slideshow-bs");
            $("#slideshow-bs").css('left', '0');
        });
    }

    $("a.controlbs_next").click(function (e) {
        moveRightBS();
    });

    $("a.controlbs_prev").click(function (e) {
        moveLeftBS();
    });


        // np shildeshow :

        var slideNPCount = $(".div-item-np").length;

        var slideNPWidth = $(".div-item-np").width();
    
        var slideNPHeight = $(".div-item-np").height();
    
        var sliderUlNPWidth = slideNPCount * slideNPWidth;
    
        $("#slider-np").css({
            width: "100%",
            height: slideNPHeight
        });
    
        $("#slideshow-np").css({
            width: sliderUlNPWidth,
            marginLeft: -slideNPWidth
        });
    
        $(".div-item-np:first-child").appendTo("#slideshow-np");
    
        function moveLeftNP() {
            $("#slideshow-np").animate({
                left: +slideNPWidth
            }, 500, function () {
                $(".div-item-np:last-child").prependTo("#slideshow-np");
                $("#slideshow-np").css('left', '0');
            });
        }
    
        function moveRightNP() {
            $("#slideshow-np").animate({
                left: -slideNPWidth
            }, 500, function () {
                $(".div-item-np:first-child").appendTo("#slideshow-np");
                $("#slideshow-np").css('left', '0');
            });
        }
    
        $("a.controlnp_next").click(function (e) {
            moveRightNP();
        });
    
        $("a.controlnp_prev").click(function (e) {
            moveLeftNP();
        });
    

});