document.addEventListener('DOMContentLoaded', () => {

     $('.headerBtn').on('click', function(){
       $('.overlay').toggleClass('active');
      });
     $('.close').on('click', function(){
       $('.overlay').toggleClass('active');
      });
  ///////////////scroll header/////////////////////////

  ////////////////mob nav//////////////////////////////
	// $('.nav__mob').hide();//?
  //    $('.mob').on('click', function(){
  //      $('.nav__mob').slideToggle();
  //      $('.mob span').toggleClass('active');
  //     });
  /////////////////mob nav///////////////////////////////

  /////////////////SCROLL////////////////////////////////
  //  $(".nav, .nav_mob").on("click","a", function (event) {
  //   //отменяем стандартную обработку нажатия по ссылке
  //   event.preventDefault();

  //   //забираем идентификатор бока с атрибута href
  //   var id  = $(this).attr('href'),

  //   //узнаем высоту от начала страницы до блока на который ссылается якорь
  //     top = $(id).offset().top;

  //   //анимируем переход на расстояние - top за 1500 мс
  //   $('body,html').animate({scrollTop: top}, 1500);
  // });
  ////////////////END SCROLL////////////////////////////////

  ////////////////ADD CLASS/////////////////////////////////
  // $("#selectBackground ul li a").click(function(e) {
  //   e.preventDefault();
  //   $("#selectBackground ul li a").removeClass('active');
  //   $(this).addClass('active');
  // });
  ///////////////END ADD CLASS//////////////////////////////

}); // end DOMContentLoaded