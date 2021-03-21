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
      $(document).on('click', '.scroll-to-top', function () {
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
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


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0','2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018'],
        datasets: [{
            label: 'Maisons',
            boxWidth: 10,
            data: [1050, 1305, 1560, 1815, 2070, 2325, 2580, 2835, 3090, 3345, 3600],
            backgroundColor: [
              'transparent',
            ],
            borderColor: [
                '#0F6E94',
            ],
            borderWidth: 2
        },
        {
          label: 'Appartements',
          data: [1600, 1760, 1920, 2080, 2240, 2400, 2560, 2720, 2880, 3040, 3200 ],
          backgroundColor: [
            'transparent',
          ],
          borderColor: [
              '#ff7f31',
          ],
          borderWidth: 2
        }]
    },
    options: {
      legendCallback: function(chart) { 
        var text = []; 
        text.push('<ul class="' + chart.id + '-legend">'); 
        for (var i = 0; i < chart.data.datasets.length; i++) { 
          text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>'); 
          if (chart.data.datasets[i].label) { 
            text.push(chart.data.datasets[i].label); 
          } 
          text.push('</li>'); 
        } 
        text.push('</ul>'); 
        return text.join('');
      },
      responsive: true,
      legend: false,
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "#e8e8e8",
              borderDash: [4, 4],
            },
            ticks: {
              fontSize: 14,
              fontColor: '#2D3237'
            }
          }],
            yAxes: [{
              scaleLabel: {
                fontSize: 16,
                display: true,
                labelString: 'Prix/m²',
                padding: 0,
                fontColor: '#2D3237'
              
              },
              gridLines: {
                color: "#e8e8e8",
                borderDash: [4, 4],
              },
              ticks: {
                  beginAtZero: true,
                  min: 400,
                  max: 4000,
                  stepSize: 400,
                  fontSize: 14,
                  fontColor: '#2D3237'
              }
            }]
        }
    }
});


var myLegendContainer = document.getElementById("myChartLegend");

// generate HTML legend
myLegendContainer.innerHTML = myChart.generateLegend();

// bind onClick event to all LI-tags of the legend
var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
  legendItems[i].addEventListener("click", legendClickCallback, false);
}

function legendClickCallback(event) {
  event = event || window.event;

  var target = event.target || event.srcElement;
  while (target.nodeName !== 'LI') {
      target = target.parentElement;
  }
  var parent = target.parentElement;
  var chartId = parseInt(parent.classList[0].split("-")[0], 10);
  var chart = Chart.instances[chartId];
  var index = Array.prototype.slice.call(parent.children).indexOf(target);

  chart.legend.options.onClick.call(chart, event, chart.legend.legendItems[index]);
  if (chart.isDatasetVisible(index)) {
    target.classList.remove('hidden');
  } else {
    target.classList.add('hidden');
  }
}


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