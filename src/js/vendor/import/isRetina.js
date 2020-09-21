// partially from - https://github.com/joaocunha/modernizr-retina-test/blob/master/modernizr-retina-test.js
window.isRetina = function(){var dpr=window.devicePixelRatio||(window.screen.deviceXDPI/window.screen.logicalXDPI)||1;return!!(dpr>1)}

if(isRetina())
    document.documentElement.classList.add("retina");