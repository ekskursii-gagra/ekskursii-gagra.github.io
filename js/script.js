// $('.btn--modal-order-form').click(function(){
//   $('.modal-item').css('display', 'flex').fadeIn(4500);
// });

// $('.modal-form__close').click(function(){
//   $('.modal-item').fadeOut();
// });



$('.menu-toggler').click(function(){
  $('.main-nav').css('display', 'flex').fadeIn();
  $('.menu-toggler').css('display', 'flex').fadeIn();
});

$('.menu-toggler--close').click(function(){
  $('.main-nav').fadeOut();
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  cssEase: 'linear',
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

$(document).ready(function(){
  $('.carousel__img').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev__img"><img src="img/arrow-prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next__img"><img src="img/arrow-next.svg"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.svg"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});



// $('form').submit(function(e) {
//   e.preventDefault();
//   // if (!$(this).valid()) {
//   //   return;
//   // }
//   $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize()
//   }).done(function() {
//       $(this).find("input").val("");
//       $('#consultation, #order').fadeOut();
//       $('.overlay, #thanks').fadeIn('slow');

//       $('form').trigger('reset');
//   });
//   // return false;
// });


// new WOW().init();          
// 'use strict';



// if (document.querySelector('.main-slide__content')) {
//   var slide = new Swiper('.main-slide__content', {
//     loop: true,
//     effect: "slide",
//     slidesPerView: 1,
//     speed: 1200,
//     autoplay: {
//       delay: 5000,
//     },
//     navigation: {
//       nextEl: '.main-slide__arrow--next',
//       prevEl: '.main-slide__arrow--prev',
//     }
//   });
// }

// if (document.querySelector('.gallery-slide__content')) {
//   var gallery = new Swiper('.gallery-slide__content', {
//     loop: true,
//     effect: 'coverflow',
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 40,
//       modifier: 10,
//     },
//     navigation: {
//       nextEl: '.gallery-slide__arrow--next',
//       prevEl: '.gallery-slide__arrow--prev',
//     },
//     autoplay: {
//       delay: 5000,
//     },
//     slidesPerView: 3,
//     breakpoints: {
//       480: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       }
//     }
//   });
// }

// if (document.querySelector('.feedback-slide__content')) {
//   var feedback = new Swiper('.feedback-slide__content', {
//     loop: true,
//     effect: "slide",
//     slidesPerView: 1,
//     speed: 1200,
//     autoplay: {
//       delay: 5000,
//     },
//     navigation: {
//       nextEl: '.feedback-slide__arrow--next',
//       prevEl: '.feedback-slide__arrow--prev',
//     }
//   });
// }

// var inputBtns = Array.prototype.slice.call(document.querySelectorAll('.appointment-form__input'));

// inputBtns.forEach(function (btn) {
//   btn.addEventListener('focusin', function (evt) {
//     evt.preventDefault();
//     btn.classList.add('appointment-form__input--focus');
//   });
//   btn.addEventListener('focusout', function (evt) {
//     evt.preventDefault();
//     if (btn.value == '') {
//       btn.classList.remove('appointment-form__input--focus');
//     }
//   });
// });

// function sendForm(form) {
//   var URL = '/wp-admin/admin-ajax.php';
//   var orderForm = Array.prototype.slice.call(document.querySelectorAll('.order-form'));
//   var roomForm = Array.prototype.slice.call(document.querySelectorAll('.room-order-form'));
//   var successMessage = document.querySelector('.success-message');
//   var modalOrderFormBtns = Array.prototype.slice.call(document.querySelectorAll('.btn--modal-order-form'));
//   var modalOrderForm = document.querySelector('.modal-form');
//   var modalClose = Array.prototype.slice.call(document.querySelectorAll('.modal-form__close'));
//   var overlayModal = document.querySelector('.overlay-modal');

//   var createXhr = function (onSuccess, onError, url, method, data) {
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     xhr.addEventListener('load', function () {
//       var error;
//       switch (xhr.status) {
//         case 200:
//           onSuccess(xhr.response);
//           break;
//         case 400:
//           error = 'Неверный запрос';
//           break;
//         case 401:
//           error = 'Пользователь не авторизован';
//           break;
//         case 404:
//           error = 'Ничего не найдено';
//           break;
//         default:
//           error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
//       }

//       if (error) {
//         onError(error);
//       }
//     });
//     xhr.addEventListener('error', function () {
//       onError('Произошла ошибка соединения');
//     });
//     xhr.addEventListener('timeout', function () {
//       onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
//     });

//     xhr.timeout = 10000;

//     if (method === 'GET') {
//       xhr.open(method, url);
//       xhr.send();
//     } else {
//       xhr.open(method, url);
//       xhr.send(data);
//     }
//   };

//   modalOrderFormBtns.forEach(function (button) {
//     button.addEventListener('click', function (evt) {
//         evt.preventDefault();
//         modalOrderForm.classList.add('modal-item--show');
//         overlayModal.classList.add('overlay-modal--show');
//     })
//   });

//   modalClose.forEach(function (close) {
//     close.addEventListener('click', function (evt) {
//         evt.preventDefault();
//         form.reset();
//         modalOrderForm.classList.remove('modal-item--show');
//         overlayModal.classList.remove('overlay-modal--show');
//         inputBtns.forEach(function (btn) {
//           btn.classList.remove('appointment-form__input--focus');
//         });
//     })
//   });

//   overlayModal.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     form.reset();
//     modalOrderForm.classList.remove('modal-item--show');
//     overlayModal.classList.remove('overlay-modal--show');
//     successMessage.classList.remove('success-message--show');
//     inputBtns.forEach(function (btn) {
//       btn.classList.remove('appointment-form__input--focus');
//     });
//   });

//   var showSuccessMessage = function () {
//     successMessage.classList.add('success-message--show');
//     overlayModal.classList.add('overlay-modal--show');
//     setTimeout(function () {
//       successMessage.classList.remove('success-message--show');
//       overlayModal.classList.remove('overlay-modal--show');
//     }, 3000);
//   };

//   var successHandler = function () {
//     form.reset();
//     orderForm.reset();
//     roomForm.reset();
//     modalOrderForm.classList.remove('modal-item--show');
//     showSuccessMessage(3000);
//     inputBtns.forEach(function (btn) {
//       btn.classList.remove('appointment-form__input--focus');
//     });
//   };

//   var errorHandler = function (error) {
//     console.log(error);
//   };
  
//   if (form) {
//     form.addEventListener('submit', function (evt) {
//       var formData = new FormData(form);
//       formData.append('action', 'ajax_order');
//       createXhr(successHandler, errorHandler, URL, 'POST', formData);
//       evt.preventDefault();
//     });
//   }
// };

// if (document.getElementById('modal-order-form')) {
//   var modalOrderForm = document.getElementById('modal-order-form');
// }

// if (document.getElementById('order-form')) {
//   var orderForm = document.getElementById('order-form');
// };

// if (document.getElementById('room-order-form')) {
//   var roomForm = document.getElementById('room-order-form');
// };

// sendForm(modalOrderForm);
// sendForm(orderForm);
// sendForm(roomForm);

// jQuery(document).ready(function () {
//   jQuery(".appointment-form__input--tel").mask("+7 999 999 99 99");
// });

// new WOW().init();
// var wow = new WOW({
//   boxClass: 'wow',
//   animateClass: 'animated',
//   offset: 100,
//   mobile: false,
//   live: true,
//   scrollContainer: null
// });
// wow.init();

// jQuery(function () {
//   jQuery(window).scroll(function () {
//     var top = jQuery(document).scrollTop();
//     if (top < 400) {
//       jQuery(".up-button").removeClass("up-button--show");
//     } else {
//       jQuery(".up-button").addClass("up-button--show");
//     }
//   });
// });

// jQuery(document).ready(function () {
//   jQuery('.scrolling').on('click', function (e) {
//     var anchor = jQuery(this);
//     jQuery('html, body').stop().animate({
//       scrollTop: jQuery(anchor.attr('href')).offset().top - 170
//     }, 777);
//     e.preventDefault();
//     return false;
//   });
// });

// jQuery(function () {
//   jQuery(window).scroll(function () {
//     var top = jQuery(document).scrollTop();
//     if (top < 400) jQuery(".main-navigation").removeClass("fixed-menu-on-mobile");
//     else jQuery(".main-navigation").addClass("fixed-menu-on-mobile");
//   });
// });

// jQuery(function () {
//   jQuery(window).scroll(function () {
//     var top = jQuery(document).scrollTop();
//     if (top < 400) jQuery(".header-contacts").removeClass("fixed-on-mobile");
//     else jQuery(".header-contacts").addClass("fixed-on-mobile");
//   });
// });

// jQuery(document).on('click', '[data-toggle="lightbox"]', function (event) {
//   event.preventDefault();
//   jQuery(this).ekkoLightbox();
// });

// var menuBtns = Array.prototype.slice.call(document.querySelectorAll('.menu-toggler'));
// var mainMenu = document.querySelector('.main-navigation');
// var overlayMenu = document.querySelector('.overlay-menu');

// menuBtns.forEach(function(btn) {
//   btn.addEventListener('click', function (evt) {
//     overlayMenu.classList.toggle('overlay-menu--show');
//     mainMenu.classList.toggle('menu--show');
//   });
// });

// overlayMenu.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   mainMenu.classList.remove('menu--show');
//   overlayMenu.classList.remove('overlay-menu--show');
// });

// if (document.getElementById('map')) {
//   ymaps.ready(init);
//   function init() {

//       var myMap;

//       myMap = new ymaps.Map("map", {
//           center: [45.408699, 36.953089],
//           zoom: 8,
//           controls: []
//       });

//       myMap.behaviors.disable('scrollZoom');

//       myMap.controls.add('zoomControl', {
//           position: {top: 40, right: 20},
//           size: 'small'
//       });

//       var myPlacemark = new ymaps.Placemark([45.408699, 36.953089], {
//         hintContent: 'Гостевой дом «Астерия»',
//         balloonContent: 'Краснодарский край, п.&nbsp;Кучугуры',
//       }, {
//               iconLayout: 'default#image',
//               iconImageHref: '/wp-content/themes/orvin/img/pin.png',
//               iconImageSize: [90, 90],
//               iconImageOffset: [-45, -45]
//           });

//       myMap.geoObjects.add(myPlacemark);

//   };
// };

// if (document.querySelector('.appointment-form__input--arrival')) {
//   jQuery('.appointment-form__input--arrival').datepicker({
//     minDate: new Date()
//   });
// }

// if (document.querySelector('.appointment-form__input--departure')) {
//   jQuery('.appointment-form__input--departure').datepicker({
//     minDate: new Date()
//   });
// }