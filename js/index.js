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
//////////////////////////////////////////////////
$('.closeAside').on('click', function(e){
  $('aside').removeClass('active');
  $('aside').toggleClass('hide');
 });
 $('.products__btn').on('click', function(e){
  $('aside').removeClass('hide');
  $('aside').toggleClass('active');
 });
///////////////////////////////////////////////////
  /////////////////slickslider////////////////////////////////
  $('.sliderFor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sliderNav',
    responsive: [
      {
        breakpoint: 850,
        settings: {  
          dots:true
        }          
      }
    ]
  });
  $('.sliderNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sliderFor',
    arrows: true,
    prevArrow:'<button class="prev"></button>',
    nextArrow:'<button class="next"></button>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 850,
        settings: 'unslick'        
      }
    ]
  });
 //////////////////////TABS//////////////////////////////////////
 $("#tabs-1").show();
 $("#items li").click(function() {
   if ($(this).attr("class") == "active") {
     return false;
   }
   var link = $(this)
     .children()
     .attr("href");
   var prevActive = $("li.active")
     .children()
     .attr("href"); 
   $("li.active").removeClass("active");
   $(this).addClass("active");
   $(prevActive).fadeOut(0, function() {
     $(link).fadeIn(0);
   });
   return false;
 });
}); // end ready 