let front = {
  hamburger: $('.hamburger'),
  header: $('.header'),
  headerCategories: $('.header-bottom'),
  body: $('body'),
  init: function () {
      this.events();      
  },
  toggleNav: function () {
    let mainNavHeight = $('.header-top').height();
    console.log(mainNavHeight);
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.header.addClass('active');
        this.body.addClass('overflow');
        this.headerCategories.css('padding-top', mainNavHeight + 20);
        } else {
            this.hamburger.removeClass('open');
            this.header.removeClass('active');
            this.body.removeClass('overflow');
        }
    },


  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.close-mobile-menu', function () {
          self.toggleNav();
      });
      $(document).on('click', '.sidebar-mobile-toggler', function () {
        $('.sidebar').toggleClass('active');
      });
      // $(document).on('click', '.header-search', function () {
      //   $('.header-search .form-control').addClass('active');
      // });
      $(".products-text .more-btn").on("click", function(e) {
        let content = $(this).parent().find('.additional-text');
        content.toggleClass('active');
        if (content.hasClass('active')) {
          $(this).parent().find('.additional-text').show();
          $(this).text('Show Less').toggleClass('active');
        } else {
          $(this).parent().find('.additional-text').hide();
          $(this).text('Show More').toggleClass('active');
        }
      });

      $(document).on('click', '.sidebar-title', function () {
        let item = $(this);
        let list = $(this).next('.sidebar-content');
        if (item.hasClass('active')) {
            item.removeClass('active');
            list.slideToggle();
        } else {
            item.addClass('active');
            list.slideToggle();
        }
      });
      let mainScreenHeight = $('.main-screen').height();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('header').addClass("scroll-header");
        } else {
          $('header').removeClass("scroll-header");
        }
      });

      if(window.matchMedia('(max-width: 768px)').matches){
        $(document).on('click', '.search-link-mobile', function(){
          $('.header-search .form-control').addClass('open')
        })

        $(document).on("click", function(event){
          var $trigger = $(".header-search");
          var $trigger2 = $(".header-search .form-control");
          if($trigger !== event.target && $trigger2 !== event.target && !$trigger.has(event.target).length){
            $('.header-search .form-control').removeClass('open')
          }            
        });
      }
  }
};

jQuery(function () {
  front.init();
});

function showLanguages() {
  $(".lang").toggleClass("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.lang-btn')) {
    var dropdowns = $(".lang");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 235,
    values: [ 6, 235 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
    " - €" + $( "#slider-range" ).slider( "values", 1 ) );
} );