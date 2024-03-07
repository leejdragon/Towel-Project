// 프로그레스 바 이벤트
let progressBar = document.querySelectorAll('.skills_bar');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 350) {
    for (let i = 0; i < progressBar.length; i++) {
      progressBar[i].style.animation = "progress 1.5s ease-in-out forwards";
    };
  };
});

// 웹 스크롤 시 특정 영역 이벤트(반응형)
let slide02 = document.querySelector('.title_wrap');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);


  if (window.matchMedia("(max-width: 2560px)").matches) {
    if (value > 930) {
      slide02.style.animation = "slide 1.5s";
    };
  } else {
    /* 뷰포트 너비가 400 픽셀 미만 */
  }
  
});


// 모바일 스크롤 시 특정 영역 이벤트(반응형)
let slide = document.querySelector('.title_wrap');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);


  if (window.matchMedia("(max-width: 500px)").matches) {
    if (value > 470) {
      slide.style.animation = "slide 1.5s";
    };
  } else {
    /* 뷰포트 너비가 400 픽셀 미만 */
  }


  
});




// let scale = document.querySelector('.skills_img img');

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if (value > 373) {
//     scale.style.animation = "scale 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";
//   };
// });

// bxSlider 
$(document).ready(function () {
  $('.bxslider').bxSlider({
    autoHover: true,
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 400,
    slideMargin: 40,
    slidesToShow: 4,
    pager: false,
    controls: true,
    moveSlides: 1
  });
});

// 클릭 시 페이지의 최상단으로 이동
$('.top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});

// 플로팅 배너
$(document).ready(function () {

  var floatPosition = parseInt($(".sideban").css('top'));

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop + floatPosition + "px";

    $(".sideban").stop().animate({
      "top": newPosition
    }, 500);

  }).scroll();

});


// $(".collapse-item").click(function(){
//   if($(this).find(".content").is(":visible")){
//       $(this).find(".content").slideUp();
//   }
//   else{
//       $(this).find(".content").slideDown();
//   }
// });


// $(document).ready(function(){
//   $(".menu > p").click(function(){
//     var submenu = $(this).next("ul");

//     if( submenu.is(":visible") ){
//       submenu.slideUp();
//     }else{
//       submenu.slideDown();
//     }
//   });
// });


// 아코디언 이벤트
// $(document).ready(function () {
//   $(".title").click(function () {
//     if ($(this).hasClass("active")) {
//       slideUp();
//     } else {
//       slideUp();
//       $(this).addClass("active").next().slideDown();
//     }
//     function slideUp() {
//       $(".title").removeClass("active").next().slideUp();
//     }
//   });
// });


//모달 이벤트
$('.modal_button').click(function () {
  var buttonId = $(this).attr('id');

  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});


// 햄버거 메뉴 이벤트
$(document).ready(function () {

  $('.more_btn').click(function () {
    $(this).toggleClass('active');
    $('.nav_list').toggleClass('active').animate({ width: "toggle" }, 800);

    // $('.nav_list').animate({width:"toggle"},400);
  });

});




// $(document).ready(function(){
//   $('.more_btn').on('click', function(e){
//     $('.nav .nav_menu .nav_list .nav_link').toggleClass('nav_slide');
//   });
// })

$(document).ready(function () {

  $('.more_btn').on('click', function(event){
    event.preventDefault();
    $('.item01').animate({
      opacity: '1'
    }, 300, function () {
      $('.item02').animate({
        opacity: '1'
      }, 300, function () {
        $('.item03').animate({
          opacity: '1'
        }, 300, function () {
          $(".item04").animate({
            opacity: '1'
          }, 300, function() {
            $(".item05").animate({
              opacity: '1'
            }, 300);
          });
        });
      });
    });
  });
});







$(document).ready(function () {
  var a = $(".pop_Tourist");
  a.each(function () {
    var thisNo = $(this).attr('index');
    $(this).on('click', function (event) {
      event.preventDefault();
      console.log(thisNo);
      $('.pop' + thisNo).bPopup({
        positionStyle: 'fixed',
        onClose: function () {

        }
      });
    });
  });
});




