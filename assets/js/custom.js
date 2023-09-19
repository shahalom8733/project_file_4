    $(document).ready(function(){

      $(".menuses").click(function(){
        $('.naves').hide()
      });
      $(".sances").click(function(){
        $('.naves').show()
        $('.menuses').show()
      });



      // mixitup
      var options = {
        animation: {
              enable: true,
               easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
          },
          controls: {
              live: false
          },
          load: {
              filter: '.build'
          }
      }

      var mixer = mixitup('.mixitup',options);


       // swiper-slider
         var swiper = new Swiper(".construct", {
        slidesPerView: 1,
        spaceBetween: 30,
              autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
            breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      });

    // magnificPopup
    $('.popup').magnificPopup({type:'iframe'});

    // counterUp
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

                      var owl = $('.owl-carousel');
              owl.owlCarousel({
                loop: true,
                margin:100,
                navRewind: false,
                responsive: {
                  0: {
                    items: 2,
                  },
                  600: {
                    items: 3,
                  },
                  1000: {
                    items: 4,
                  }
                }
              });

    });
