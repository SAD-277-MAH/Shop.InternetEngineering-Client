$(document).ready(function () {

    var slideCount = $("#slider ul li").length;

    var slideWidth = $("#slider ul li").width();

    var slideHeight = $("#slider ul li").height();

    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({
        width: slideWidth,
        height: slideHeight
    });

    $("#slider ul").css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $("#slider ul li:last-child").prependTo("#slider ul");

    function moveLeft() {
        $("#slider ul").animate({
            left: +slideWidth
        }, 500, function () {
            $("#slider ul li:last-child").prependTo("#slider ul");
            $("#slider ul").css('left', '0');
        });
    }

    function moveRight(){
        $("#slider ul").animate({
            left: -slideWidth
        },500,function(){
            $("#slider ul li:first-child").appendTo("#slider ul");
            $("#slider ul").css('left', '0');
        });
    }

    $("button.control_next").click(function (e) { 
        moveRight();
    });

    $("button.control_prev").click(function (e) { 
        moveLeft();
    });

    $('.div-category').mouseover(function () {
        $('.div-category-list').show();
    });
    
    $('.div-category-list').mouseover(function () {
        $('.div-category-list').show();
    });
    
    $('.div-category-list').mouseout(function () {
        $('.div-category-list').hide();
    });

});