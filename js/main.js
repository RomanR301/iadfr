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
            scrollTop : 0  // Scroll to top of body
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

// GRAPH 
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    offset: true,
    data: {
        labels: ['','2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018'],
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
      responsive: false,
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
myLegendContainer.innerHTML = myChart.generateLegend();
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
Chart.pluginService.register({
  beforeRender: function(chart) {
    if (chart.config.options.showAllTooltips) {
      // create an array of tooltips
      // we can't use the chart tooltip because there is only one tooltip per chart
      chart.pluginTooltips = [];
      chart.config.data.datasets.forEach(function(dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function(sector, j) {
          chart.pluginTooltips.push(new Chart.Tooltip({
            _chart: chart.chart,
            _chartInstance: chart,
            _data: chart.data,
            _options: chart.options.tooltips,
            _active: [sector]
          }, chart));
        });
      });

      // turn off normal tooltips
      chart.options.tooltips.enabled = false;
    }
  },
  afterDraw: function(chart, easing) {
    if (chart.config.options.showAllTooltips) {
      // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
      if (!chart.allTooltipsOnce) {
        if (easing !== 1)
          return;
        chart.allTooltipsOnce = true;
      }

      // turn on tooltips
      chart.options.tooltips.enabled = true;
      Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
        tooltip.initialize();
        tooltip.update();
        // we don't actually need this since we are not animating tooltips
        tooltip.pivot();
        tooltip.transition(easing).draw();
      });
      chart.options.tooltips.enabled = false;
    }
  }
});


// DIAGRAMS PRICE
Chart.defaults.global.defaultFontFamily = "Gellix";

var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
  type: 'horizontalBar',
  data: {
     labels: ["Voreppe", "Fontaine", "Lyon", "Grenoble", "Saint Egrève", "Echirolle", "Voiron"],
     datasets: [{
        data: [2200, 1750, 1550, 1360, 1180, 1180, 1180],
        backgroundColor: ["#E1F6FF", "#E1F6FF", "#E1F6FF", "#0F6E94", "#E1F6FF", "#E1F6FF", "#E1F6FF"], 
     }]
  },
  options: {
    showAllTooltips: true,
    cornerRadius: 100,
     tooltips: {
       enabled: true,
       cornerRadius: 10,
       caretSize: 0,
       xPadding: 16,
       yPadding: 8,
       fontColor: '#0F6E94',
       bodyFontColor: '#0F6E94;',
       bodyFontSize: 16,
       bodyFontFamily: 'Gellix-bold',
       titleFontSize: 16,
       titleFontColor: '#333333',
       backgroundColor: '#E1F6FF',
       titleFontStyle: 'normal',
       titleMarginBottom: 10,
       reversed: true,
       filter: function (tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        if (label !== "Grenoble") {
          return false;
        } else {
          return true;
        }
       },
       callbacks: {
        label: function(tooltipItems, data) { 
            return tooltipItems.value + "€/m²";
        },
       },
     },
     responsive: true,
     legend: {
        display: false,
     },
     scales: {
        yAxes: [{
          categoryPercentage: .5,
          barPercentage: .30,
          gridLines: {
            display: false,
            drawTicks: true,
            color: "#e8e8e8",
            borderDash: [4, 4],
            drawOnChartArea: false
          },
          ticks: {
            display: true,
            fontColor: '#555759',
            fontSize: 14,
            fontFamily: 'Gellix'
          }
           
        }],
        xAxes: [{
            gridLines: {
              color: "#e8e8e8",
              borderDash: [4, 4],
              display: true,
              drawTicks: false,
              tickMarkLength: 5,
              drawBorder: false,
            },
          ticks: {
            padding: 0,
            beginAtZero: true,
            fontFamily: 'Gellix',
            fontColor: '#555759',
            fontSize: 12,   
            min: 400,
            max: 2400,
            stepSize: 400,
            callback: function(value, index, values) {
              return value + '€/m²';
            }
          },
        }]
     },
  }
});

// HALF DOUGHNUT
var configd = {
  type: 'doughnut',
  data: {
      labels: ["50m²", "50 - 100 m²", "150-200m²", "+ 200m²"],
      datasets: [{
          data: [35, 40, 25, 25],
          backgroundColor: [
              '#0F6E94',
              '#FF7F31',
              '#AB66EB',
              '#62D390'
          ],
          borderColor: [
              'rgba(255, 255, 255 ,1)',
              'rgba(255, 255, 255 ,1)',
              'rgba(255, 255, 255 ,1)',
              'rgba(255, 255, 255 ,1)'
          ],
          borderWidth: 3
      }]

  },
  options: {
      responsive: true,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 80,
      tooltip: {
          enabled: false
      },
      legend: {
          display: false
      },
      layout: {
        padding: 20,
    },
      legendCallback: function (chart) {             
          // Return the HTML string here.
          console.log(chart.data.datasets);
          var text = [];
          text.push('<ul class="' + chart.id + '-legend">');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
              text.push('<li><span class="color" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span><span id="legend-' + i + '-item">');
              if (chart.data.labels[i]) {
                  text.push('<span>' + chart.data.datasets[0].data[i] + '%</span>')
                  text.push(chart.data.labels[i]);
              }
              text.push('</span></li>');
          }
          text.push('</ul>');
          return text.join("");
      },
      animation: {
          animateScale: true,
          animateRotate: true
      },
  }
};

var ctxd = document.getElementById('diagramDetails').getContext('2d');
  
  window.myDoughnut = new Chart(ctxd, configd);
  $("#do_legend").html(window.myDoughnut.generateLegend());




var app = {
  init: function(){
    this.cacheDOM();
    this.handleCharts();
  },
  cacheDOM: function(){
    this.$chart = $(".bar-chart");
  },
  cssSelectors: {
    chartBar: "bar-chart--inner"
  },
  handleCharts: function(){
    /* 
      iterate through charts and grab total value
      then apply that to the width of the inner bar
    */
    $.each(this.$chart, function(){
      var $this = $(this),
          total = $this.data("total"),
          $targetBar = $this.find("."+app.cssSelectors.chartBar);
          // $targetBar.css("width","0%"); // zero out for animation
          // setTimeout(function(){
          //   $targetBar.css("width",total+"%");
          // },400);
    });
  }
}

app.init();