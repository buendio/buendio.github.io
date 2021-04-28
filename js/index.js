$(document).ready(function(){


  ////////////////mob nav//////////////////////////////
	$('.nav_mob').hide();//?
     $('.mob').on('click', function(){
       $('.nav_mob').slideToggle();
       $('.mob span').toggleClass('active');
       $('body').toggleClass('vh');
      });
  /////////////////mob nav///////////////////////////////
  $('.btnJs').on('click', function(e){
    e.preventDefault();
    $('.modal').toggleClass('active');
    $('body,html').animate({scrollTop: 0}, 1000);
   });
  $('.close').on('click', function(e){
    $('.modal').toggleClass('active');
   });
//////////////////////range slider///////////////////////////////////
  const slider = document.getElementById('rangeSlider');

  noUiSlider.create(slider, {
      start: [0, 500],
      connect: true,
      step:1,
      range: {
          'min': 0,
          'max': 1000
      }
  });
  const input0 = document.getElementById('inpt1');
	const input1 = document.getElementById('inpt2');
	const inputs = [input0, input1];
  slider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});
  const setSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		slider.noUiSlider.set(arr);
	};
  inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setSlider(index, e.currentTarget.value);
		});
	});
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

}); // end ready 