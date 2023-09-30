/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
$(document).ready(function() {
    // eslint-disable-next-line no-undef
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    // eslint-disable-next-line no-undef
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            // eslint-disable-next-line no-undef
            $('.navbar').addClass("sticky");
        } else {
            // eslint-disable-next-line no-undef
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            // eslint-disable-next-line no-undef
            $('.scroll-up-btn').addClass("show");
        } else {
            // eslint-disable-next-line no-undef
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn .fa-bars').toggleClass("active");
    });

    // typing text animation script
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Student", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});