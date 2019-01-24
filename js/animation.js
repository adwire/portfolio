  $(window).load(function () {
            $('.hero').addClass('fadeIn');
        });



$(function () {
            //caches a jQuery object containing the header element
            var about = $('.about h1, .titleLine');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 80) {
                    about.addClass("fadeIn");
                } else {
                    about.removeClass("");
                }
            });
});


$(function () {
            //caches a jQuery object containing the header element
            var services = $('#services h1,h2, .titleLine');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 1280) {
                    services.addClass("fadeIn");
                } else {
                    services.removeClass("");
                }
            });
        });


 $(function () {
            //caches a jQuery object containing the header element
            var portfolio = $('.portfolio h1, .titleLine');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 1800) {
                    portfolio.addClass("fadeIn");
                } else {
                    portfolio.removeClass("");
                }
            });
        });


$(function () {
            //caches a jQuery object containing the header element
            var contact = $('.contact h1,h2, .titleLine');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 2900) {
                    contact.addClass("fadeIn");
                } else {
                    contact.removeClass("");
                }
            });
        });

