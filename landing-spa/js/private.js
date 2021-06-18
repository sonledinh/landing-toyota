$(document).ready(function() {
    if ($('.back-top').length) {
        var scrollTrigger = 300,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-top').addClass('show');

                } else {
                    $('.back-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

        $('.back-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
})



$('.header-desk ul li a').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href')); 
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
  $('.header-desk ul li a').removeClass("active");
  $(this).addClass("active");
});

$('.header a').click(function(e){
  $('nav#menu').toggleClass('active');
  $(this).toggleClass('active');
});


$('.slide-banner').slick({
    autoplay: false,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
});

$('.slide-service .row').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
$('.slide-member .row').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
$('.list-feedback .row').slick({
    autoplay: false,
    arrow: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.header a').click(function(e){
  $('body').toggleClass("active");
  $('nav#menu-list').toggleClass("active");
});

$('nav#menu-list ul li a').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 40;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
  $('body').removeClass("active");
  $('nav#menu-list').removeClass("active");
  $('nav#menu-list ul li a').removeClass("active");
  $('.header a').removeClass("active");
  $(this).addClass("active");
});



const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 24, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)