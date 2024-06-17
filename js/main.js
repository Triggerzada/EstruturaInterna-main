
$(function() {
    'use strict';

    // Animaçao de Serviçes

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1400, 'easeInOutExpo');
        event.preventDefault();
    });
    $(document).ready(function() {


    // Scroll to top animated button

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });





        // Slider top 


        $('#myCarousel-one').carousel({
            interval: 9000, //changes the speed
            keyboard: false,
        })


        //Team carousel

        $('#myCarousel-two').carousel({
            interval: 4000, //changes the speed
            keyboard: false,
        })

        //Clients carousel

        $('#myCarousel-three').carousel({
            interval: 4000, //changes the speed
            keyboard: false,
        })

        //Testimonials carousel

        $('#myCarousel-four').carousel({
            interval: 8000, //changes the speed
            keyboard: false,
        })


    });

    /* Animated Titles of Sections*/

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function() {
        $('.section-heading, .section-subheading').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animated fadeInUp')
            }
        });


    });

    /* Animaçao do Menu*/

    $(function() {
        var shrinkHeader = 350;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.navbar').addClass('navbar-shrink');
            } else {
                $('.navbar').removeClass('navbar-shrink');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    /* Footer reveal function*/

    $('footer').footerReveal({
        zIndex: -100,
        shadow: true,
        shadowOpacity: 0.6

    });



});


document.getElementById('see_main').addEventListener('click', function(event) {
    event.preventDefault();
    var aboutSection = document.getElementById('about');
    aboutSection.classList.remove('hidden');
    fadeIn(aboutSection); }) 


    