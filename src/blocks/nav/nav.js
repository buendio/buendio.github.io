$(window).scroll(function () {
    let $nav = $('.nav');

    if ($(window).scrollTop() > 60) {
        $nav.addClass('nav_scroll');
    } else {
        $nav.removeClass('nav_scroll');
    }
});

$('.nav__burger, .nav__hidden-close').on('click', function () {
    let $html = $('html'),
        $nav_hidden = $('.nav__hidden'),
        cNavHidden = 'nav__hidden_open';

    $nav_hidden.toggleClass(cNavHidden);

    if ($nav_hidden.hasClass(cNavHidden))
        $html.css('overflow', 'hidden');
    else
        $html.css('overflow', '');
});