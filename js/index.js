document.addEventListener('DOMContentLoaded', () => {
  ///////////////scroll header////////////////////////
  let header = $('header'),
		scrollPrev = 0;

  $(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 72 && scrolled > scrollPrev ) {
      header.addClass('out');
      $('.dropdown').removeClass('active');
    } else {
      header.removeClass('out');

    }
    scrollPrev = scrolled;
  });

  ////////////////mob nav//////////////////////////////
	$('.nav__mob').hide();//?
     $('.mob').on('click', function(){
       $('.nav__mob').slideToggle();
       $('.mob span').toggleClass('active');
       $('body').toggleClass('vh');
      });
  /////////////////AOS animation///////////////////////////////
  AOS.init();
  /////////////////////animation number////////////////////////////
  $(function() {
		let target_block = $(".nineScreen h2"); // Ищем блок
		let blockStatus = true;

		$(window).scroll(function() {

			let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

			if(scrollEvent && blockStatus) {

				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

				$({numberValue: 0}).animate({numberValue: 200000}, {

					duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
					easing: "linear",

					step: function(val) {

						$(".nineScreen h2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

					}
				});
			}
		});
	});
  ///////////////////dropdown list/////////////////////////////
  $('.language').on('click', function(){
    $('.dropdown').toggleClass('active');
   });
  // document.querySelector('.language').addEventListener('click', () => {
  //   document.querySelector('.dropdown').classList.toggle("active");
  // }) ;
/////////////////////animation details//////////////////////////////
class Accordion {
  constructor(el) {
    // сохраняем details
  this.el = el
  // сохраняем summary
  this.summary = el.querySelector('summary')
  // сохраняем div с классом "content"
  this.content = el.querySelector('.details__content')

  // сохраняем объект анимации (для ее отмены при необходимости)
  this.animation = null
  // находится ли элемент в процессе закрытия?
  this.isClosing = false
  // находится ли элемент в процессе раскрытия?
  this.isExpanding = false
  // определяем клик по summary
  this.summary.addEventListener('click', (e) => this.onClick(e))
  }

  // функция, вызываемая при нажатии на summary
  onClick(e) {
    // отменяем стандартное поведение браузера
    e.preventDefault()
    // добавляем к details свойство "overflow" со значением "hidden" во избежание переполнения контента
    this.el.style.overflow = 'hidden'
    // проверяем, находится ли элемент в процессе закрытия или уже закрыт
    if (this.isClosing || !this.el.open) {
      this.open()
      // проверяем, находится ли элемент в процессе открытия или уже открыт
    } else if (this.isExpanding || this.el.open) {
      this.shrink()
    }
  }

  // функция, вызываемая для анимированного скрытия контента
  shrink() {
    // фиксируем начало закрытия элемента
    this.isClosing = true

    // сохраняем текущую высоту элемента
    const startHeight = `${this.el.offsetHeight}px`
    // рассчитываем высоту summary
    const endHeight = `${this.summary.offsetHeight}px`

    // если анимация уже запущена
    if (this.animation) {
      // отменяем ее
      this.animation.cancel()
    }

    // запускаем WAAPI анимацию
    this.animation = this.el.animate({
      // устанавливаем ключевые кадры
      height: [startHeight, endHeight]
    }, {
      // если анимация кажется вам слишком быстрой или слишком медленной, то вы можете изменить значение данного свойства (duration - продолжительность)
      duration: 400,
      // вы также можете изменить значение этого свойства (easing (animation-timing-function) - временная функция)
      easing: 'ease-out'
    })

    // после завершения анимации вызываем onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false)
    // если анимация отменена, присваиваем переменной "isClosing" значение "false"
    this.animation.oncancel = () => this.isClosing = false
  }

  // функция, вызываемая для раскрытия элемента после клика
  open() {
    // устанавливаем элементу фиксированную высоту
    this.el.style.height = `${this.el.offsetHeight}px`
    // добавляем details атрибут "open"
    this.el.open = true
    // ожидаем следующего кадра для вызова функции "expand"
    requestAnimationFrame(() => this.expand())
  }

  // функция, вызываемая для анимированного показа контента
  expand() {
    // фиксируем начало раскрытия элемента
    this.isExpanding = true
    // получаем фиксированную высоту элемента
    const startHeight = `${this.el.offsetHeight}px`
    // рассчитываем высоту открытого элемента (высота summary + высота содержимого)
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`

    // если анимация уже запущена
    if (this.animation) {
      // отменяем ее
      this.animation.cancel()
    }

    // запускаем WAAPI анимацию
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    })

    this.animation.onfinish = () => this.onAnimationFinish(true)
    this.animation.oncancel = () => this.isClosing = false
  }
  // коллбэк, вызываемый после завершения shrink или expand
  onAnimationFinish(open) {
    // устанавливаем значение атрибута "open"
    this.el.open = open
    // удаляем переменную, хранящую анимацию
    this.animation = null
    // сбрасываем значения
    this.isClosing = false
    this.isExpanding = false
    // удаляем overflow и фиксированную высоту
    this.el.style.height = this.el.style.overflow = ''
  }
}
document.querySelectorAll('details').forEach(el => {
  new Accordion(el)
})
///////////////////////Lazy looad iframe////////////////////////////
if ("IntersectionObserver" in window) {
    var iframesLazy = document.querySelectorAll("iframe.iframe-youtube-lazy-video");
    var iframeObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.target.src.length == 0) {
      entry.target.src = entry.target.dataset.src;
      iframeObserver.unobserve(entry.target);
      }
    });
    });
    iframesLazy.forEach(function (iframe) {
      iframeObserver.observe(iframe);
    });
  } else {
    var iframesLazy = document.querySelector('iframe.iframe-youtube-lazy-video');
    for (var i = 0; i < iframesLazy.length; i++) {
    if (lazyVids[i].getAttribute('data-src')) {
      lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
    }
    }
  }
/////////////////frame youTube/////////////////////
$('.ytJs').on('click', function() {
  $(".frame").addClass('active');
})

$(".frame").click(function (e){ // отслеживаем событие клика по веб-документу
 console.log(e.target);
  var block = $(".frame__yt"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
  if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
      && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
         // если условия выполняются - скрываем наш элемент

         let video = $(".frame__yt").attr("data-src");
        $(".frame__yt").attr("src","");
         $(".frame__yt").attr("src",video);
        $(".frame").removeClass('active');
      }
});
/////////////////preloader/////////////////////////////
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
}); // end DOMContentLoaded