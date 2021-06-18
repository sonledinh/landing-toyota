

$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
});

$('.slide-fb').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$('.slide-prd').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$('.header-top a').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 60;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
  $('.header-top a').removeClass("active");
  $(this).addClass("active");
});


if($(window).innerWidth() >= 1024){
    new WOW().init();
}

if($(window).innerWidth() <= 767){
    $('.btn-menu-mobile a').click(function(event) {
        $('.h-menu').toggleClass('active');
    });

    $('.h-menu a').click(function(event) {
        $('.btn-menu-mobile a').click();
    });
}