$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 760) {
            $(".navbar").addClass("navbar-fixed-top");
        } else if ($(window).scrollTop() < 761) {
            $(".navbar").removeClass("navbar-fixed-top");
        }
    });


    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.position().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });



    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeInDown');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });


    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
});
