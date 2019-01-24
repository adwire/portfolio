$(function() {
            //caches a jQuery object containing the header element
            var header = $('.menu');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 700) {
                    header.addClass("scrolledMenu");
                } else {
                    header.removeClass("scrolledMenu");
                }
            });
        });

        $(function() {
            //caches a jQuery object containing the header element
            var header = $('a');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 700) {
                    header.addClass("darkMenu");
                } else {
                    header.removeClass("darkMenu");
                }
            });
        });

        $(function() {
            //caches a jQuery object containing the header element
            var header = $('.footerSocial i');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 700) {
                    header.addClass("darkMenu");
                } else {
                    header.removeClass("darkMenu");
                }
            });
        });

$(window).scroll(function() {
            if ($(document).scrollTop() >= 700) {
                $('.logo img').attr('src', 'images/logo_black.png');
            } else {
                $('.logo img').attr('src', 'images/logo.png');
            }
        });