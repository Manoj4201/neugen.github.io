$(document).ready(function () {

  let siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  let siteMenuClone = function () {

    $('.js-clone-nav').each(function () {
      let $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });


    setTimeout(function () {


      let counter = 1;
      $('.site-mobile-menu .has-children').each(function () {
        let $this = $(this);

        $this.prepend('<a class="arrow-collapse"></a>');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'href': '#collapseItem' + counter,
          'role': 'button',
          'aria-expanded': 'false',
          'aria-controls': 'collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class': 'collapse',
          'id': 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      let $this = $(this);
      console.log('clicked')
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
        console.log('collapse show active');
      } else {
        $this.addClass('active');
        console.log('not show active');
      }
      e.preventDefault();

    });

    $(window).resize(function () {
      let $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function (e) {
      let $this = $(this);
      e.preventDefault();

      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    })

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      let container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  };
  siteMenuClone();

});
$(document).ready(function () {
  $(window).on('resize load', function () {
    if ($(window).width() > 1440 ) { //|| $(window).width() < 500
      console.log('first')
      $('body').find('.main-container').addClass('container');
    } else {
      console.log('second')
      $('body').find('.main-container').removeClass('container');
    }
  });
});
