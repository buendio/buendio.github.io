window._getW = window.innerWidth || $(window).width();
window._getH = window.innerHeight || $(window).height();

$(window).on('resize', function(){
    window._getW = window.innerWidth || $(window).width();
    window._getH = window.innerHeight || $(window).height();
});

$('body').on('sorpResizeWidth', function(){
    window._getW = window.innerWidth || $(window).width();
    window._getH = window.innerHeight || $(window).height();
});

window.getW = function getW(){
    return window._getW;
};

window.getH = function getH(){
    return window._getH;
};