let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  body: $('body'),
  init: function () {
      this.events();      
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
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      // $(window).scroll(function () {
      //   if ($(this).scrollTop() > 200) {
      //     $('header').addClass("scroll-header");
      //   } else {
      //     $('header').removeClass("scroll-header");
      //   }
      // });
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