  // Gallery Filter JQuery Codes
  var $grid = $('.grid').isotope({

  });
  
  // filter items on button click
  $('.gallery-btn-area').on( 'click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.grid').isotope({
    itemSelector: '.gallery-item',
    percentPosition: true,
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gitem'
    }
  });


  /* $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["PREV", "NEXT"],
        dots:true,
        autoplay:true,
        autoplayTimeout:10000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });*/


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:true,
      responsive:{
          600:{
              items:3
          }
         
      }
  })