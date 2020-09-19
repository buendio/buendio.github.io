$(document).ready(function(){
  ///////////////scroll header////////////////////////
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
     		$('header').addClass("sticky");
   		}
  		 else{
    			 $('header').removeClass("sticky");
  			 }
	});
  ///////////////scroll header/////////////////////////

  ////////////////mob nav//////////////////////////////
	$('.nav_mob').hide();//?
     $('.mob').on('click', function(){
       $('.nav_mob').slideToggle();
       $('.mob span').toggleClass('active');
      });
  /////////////////mob nav///////////////////////////////

  /////////////////SCROLL////////////////////////////////
   $(".nav a").on("click", function (event) {
    event.preventDefault();
      var top;
      var id  = $(this).attr('href');
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
   $(".nav_a").on("click", function (event) {
    event.preventDefault();
      var top;
      var id  = $(this).attr('href');
      top = $(id).offset().top;
      $('.nav_mob').slideToggle();
      $('.mob span').toggleClass('active');
      $('body,html').animate({scrollTop: top}, 1500);
  });
  ////////////////END SCROLL////////////////////////////////

          $("#tabs-1").show();
          $("#items li").click(function() {
            if ($(this).attr("class") == "active") {
              return false;
            }
            var link = $(this)
              .children()
              .attr("href");
            
            var prevActive = $("#items li.active")
              .children()
              .attr("href"); 
            $("#items li.active").removeClass("active");
            $(this).addClass("active");
            $(prevActive).fadeOut(0, function() {
              $(link).fadeIn(0);
            });
            return false;
          });
/////////////////////////////////////////////////////////////
              $("#iframe1").show();
          $(".adres_wrap li").click(function() {
            if ($(this).attr("class") == "active") {
              return false;
            }
            var link = $(this)
              .children()
              .attr("href");
            
            var prevActive = $(".adres_wrap li.active")
              .children()
              .attr("href"); 
            $(".adres_wrap li.active").removeClass("active");
            $(this).addClass("active");
            $(prevActive).fadeOut(0, function() {
              $(link).fadeIn(0);
            });
            return false;
          });
/////////////////////////////////////////////////////////////
          $('.feed_js').slick({
            slidesToShow: 3,
            infinite: true,
            adaptiveHeight: true,
            nextArrow: '<button class="next" ><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            prevArrow: '<button class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            responsive: [
              {
                breakpoint: 600,
                settings: {  
                  slidesToShow: 1,
                  arrows:false,
                  dots:true,
                }          
              }
            ],
          });
          //////////////////////////////////
          $('.un_js').slick({
            slidesToShow: 1,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            adaptiveHeight: true,
            arrows:false,
            fade:true,
            
          });
          //////////////////////////////////

          $('.btn').click(function(){
            $('.overlay').fadeIn(500);
           });
          $('.closes').click(function(e){
            e.preventDefault();
            $('.overlay').fadeOut(500);
           });
/////////////////////////////////////////////////
          $(".mask").mask("+38 (999) 99-99-999");
/////////////////////////////////////////////////


}); // end ready 