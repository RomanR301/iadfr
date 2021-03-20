let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  body: $('body'),
  init: function () {
      this.events();      

      var recentSlider = new Swiper('.recent-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
        loop: false,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
              allowTouchMove: true,
              loop: true,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
              allowTouchMove: true,
              loop: true,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
              allowTouchMove: true,
              loop: true,
              pagination: {
                el: '.recent-pagination',
              },
            },
            993: {
              slidesPerView: 3,
              spaceBetween: 30,
              allowTouchMove: false,
            }
        }
    });
    $(document).ready(function() {
      $(".faq-tabs .accordion__button").on("click", function(e) {
      e.preventDefault();
          if ($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
          } else {
          $(".faq-tabs .accordion__item").removeClass("active");
          $(this).parent().addClass("active");
          }
      });
      $(".faq-accordion .accordion__button").on("click", function(e) {
      e.preventDefault();
          if ($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
          $(this).parent().find(".accordion__content").slideUp(200);
          } else {
          $(this).parent().addClass("active");
          $(this).parent().find(".accordion__content").slideDown(200);
          }
      });
      let langToggle = document.querySelector('.lang-select-wrapper') !== null;
      if (langToggle) {
          (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
              this.querySelector('.lang-select').classList.toggle('open');
              for (const option of document.querySelectorAll(".lang-option")) {
                  option.addEventListener('click', function() {

                      if (!this.classList.contains('selected')) {
                          this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                          this.classList.add('selected');
                          this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                      }
                  })
              }
              window.addEventListener('click', function(e) {
                  const select1 = document.querySelector('.lang-select')
                  if (!select1.contains(e.target)) {
                      select1.classList.remove('open');
                  }
              });
          })
      }
      // $(document).ready(function() {
      //   $(".accordion__item .accordion__button").on("click", function(e) {
      //   e.preventDefault();
      //       if ($(this).parent().hasClass("active")) {
      //       $(this).parent().removeClass("active");
      //       $(this).parent().find(".accordion__content").slideUp(200);
      //       } else {
      //       $(".accordion__item").removeClass("active");
      //       $(this).parent().addClass("active");
      //       $(".accordion__content").slideUp(200);
      //       $(this).parent().find(".accordion__content").slideDown(200);
      //       }
      //   });
      // });
    });
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.addClass('active');
        this.body.addClass('overflow');
        } else {
            this.hamburger.removeClass('open');
            this.nav.removeClass('active');
            this.body.removeClass('overflow');
        }
    },
  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('header').addClass("scroll-header");
        } else {
          $('header').removeClass("scroll-header");
        }
      });
  }
};

jQuery(function () {
  front.init();
  // make space between absolute positioned elements when window loads
  var maxHeight=0; 
  $(".faq-tabs .accordion__content").each(function () {
      if (maxHeight < $(this).height()) {
        maxHeight=$(this).height()
      }
  })
  $(".faq-tabs").height(maxHeight);
});






// function showLanguages() {
//   $(".lang").toggleClass("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.lang-btn')) {
//     var dropdowns = $(".lang");
//     for (let i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


// SLIDER
(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:992px)' );
  let swiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
	  if ( swiper !== undefined ) swiper.destroy( true, true );
	  return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();

      }
  };
  const enableSwiper = function() {
    swiper = new Swiper ('.products-slider', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,

    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();