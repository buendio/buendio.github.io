
var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
var btnPrev = $(".quiz__prev");
var btnNext = $('.quiz__next');
var isValid;
var dataBlock;
var activeSlede = [];

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$(".quiz__current-num").text(number + 1);
$(".quiz__all-num").text( maxNumber - 2);

$element.on('change input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});

function btnActive(isValid) {
  if(number === 0){
    btnPrev.prop('disabled', 'false');
    btnPrev.hide();
    btnNext.prop('disabled', isValid);
    $('.btn-lbs').hide();
  }else{
    btnPrev.fadeIn();
    btnPrev.prop('disabled', false);
    $('.btn-lbs').hide();
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }
    
  }

}
// btnPrev.hide();

var lbs = false;
$('.btn-lbs').on('click', function(event) {
  event.preventDefault();
  $(this).addClass('act');
  
  if(!lbs){
    setTimeout(function(){
      $('.btn-lbs').removeClass('act');
      lbs = false;
    }, 3000);
    lbs = true;
  }

});

$("input[name='qw8']").on('change, input', function() {

  if($(this).hasClass('vit')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Viber');
    $('.eml').hide();
  }else if($(this).hasClass('wat')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в WhatsApp');
    $('.eml').hide();
  }else if($(this).hasClass('teg')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Telegram');
    $('.eml').hide();
  }else if($(this).hasClass('phn')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон ');
    $('.eml').fadeIn();
  }

});

  var $barLevel = 100 / (maxNumber - 2);
  var $barWidth = $barLevel;

  // money

  function progress(){
    $(".progress-bar__line").css({"width": $barWidth + '%'});
  }
  progress();

// btn

function btnClick() {

btnPrev.on('click', function(event) {
  event.preventDefault();
  --number;

  $('.test-item').hide();
  $('.test-item').eq(number).fadeIn(1000);
  $(".tsr-i").hide();
    $(".tsr-i").eq(number).fadeIn(600);
  $(".quiz__current-num").text(number + 1);
  btnActive(!isValid);


  animateTop ();
});

  btnNext.on('click', function(event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;
    
    btnActive(!isValid);

    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }

      
    if(number === maxNumber - 2){
      $barWidth = 100;
      $('.progress-bar__line-num').text('Готово на 100%!');
      $('.endrt').addClass('op');

    }

    $(".test-item").hide();
    $(".test-item").eq(number).fadeIn(600);
    $(".tsr-i").hide();
    $(".tsr-i").eq(number).fadeIn(600);
    
    $barWidth += $barLevel;
    progress();
    animateTop ();
    $(".quiz__current-num").text(number + 1);
    

  });


}
btnClick();

function animateTop (eq){
  var elem = $('.test-scroll-js');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}


$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};





 var nForm = false;
  $(function(){
    'use strict';
    var action = './assets/mailer/send.php';
    $('form').on('submit', function(e){
      e.preventDefault();
      var formThis = $(this);
      var fd = new FormData( this );

      
      formThis.find('.btn').attr({
        'disabled': 'true'
      });

        if(formThis.find('input[name="formname"]').val() === "price" ){
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/price.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download','');

            if(navigator.userAgent.indexOf('Mac') > 0){
              window.location = 'docs/price.pdf';
            }else{
              simulate( link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#modal-download").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

          }else if(formThis.find('input[name="formname"]').val() === "predl" ){
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/predl.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download','');

            if(navigator.userAgent.indexOf('Mac') > 0){
              window.location = 'docs/predl.pdf';
            }else{
              simulate( link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#modal-download").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

          }
          else if(formThis.find('input[name="formname"]').val() === "test"){

            
            formThis.find('input').attr({
              'disabled': 'true',
            });
            formThis.find('button').attr({
              'disabled': 'true',
            });

            $('.test-item, .progress-bar').hide();
            $('.test-final').fadeIn();

          }else{
            $(".overlay").fadeOut();
            $('html').addClass('stop');
            $("#modal-thank").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

          }

          $('form').trigger('reset');
      
      $.ajax({
        url: action,
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){

      

        },

      });
    });
 });




  // ---------------------

  function simulate(element, eventName)
  {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
      if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
      throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
      oEvent = document.createEvent(eventType);
      if (eventType == 'HTMLEvents')
      {
        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
      }
      else
      {
        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
      }
      element.dispatchEvent(oEvent);
    }
    else
    {
      options.clientX = options.pointerX;
      options.clientY = options.pointerY;
      var evt = document.createEventObject();
      oEvent = extend(evt, options);
      element.fireEvent('on' + eventName, oEvent);
    }
    return element;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
  }
  var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
  }



var cookiesTest2 = get_cookie ( "test2" );
  if(cookiesTest2 !== '' && cookiesTest2 !== null){
    // return false;
  }else{
   var closeMod = false;
   $(document).mouseleave(function(event) {
       event = event || window.event;
       if (event.clientY < 0 || event.clientY < 3) {
           if (!closeMod) {
            console.log(cookiesTest2);
               $('#modal-gift').fadeIn();
               $('html').addClass('stop');
               closeMod = true;
               var date2 = new Date();
               date2.setDate(date2.getDate() + 7);
              date2 = date2.toUTCString();
              document.cookie = "test2=1;expires=" + date2;
           }

       }
   });
  
  }


function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}





$(".js-range-slider").ionRangeSlider({
       min: 1,
       max: 16,
       from: 5,
       onStart: function (data) {
          $('#qw3inp').val($(".js-range-slider").prop("value"));
      },
   });
  var my_range = $(".js-range-slider");

  my_range.on("change input", function () {
      var $inp = $(this);
      var from2 = $inp.data("from");
   $('#qw3inp').val(from2);

});

  var my_range_instance = my_range.data("ionRangeSlider");
  $('#qw3inp').on('change input', function() {
   var _val = $(this).val();
   my_range_instance.update({
          from: _val,

      });
  });









