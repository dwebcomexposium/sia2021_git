/**!
	Corporate Navigation
	Dropdown menu & Mega menu navigation

	@contributors: Geoffrey Crofte (Alsacréations)
	@date-created: 2015-04-01
	@last-update: 2015-05-28
 */

  ;(function($) {
  
    var $menuline = $('.mn-menu-line'),
      $menu = $('.mn-menu'),
      $submenus = $menu.find('.mn-item-has-megamenu, .mn-item-has-submenu'),
      speed = 1000,
      menuInitPos = $('#main').offset(),
      scrolltimer,
      resizetimer;
  
    // actions on mouse interactions
    $submenus.on('mouseenter.megamenu', function(e){
        $(this).addClass('is-open')
          .find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeIn(speed);
      })
      .on('mouseleave.megamenu', function(e){
        $(this).removeClass('is-open')
          .find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeOut(speed);
      });
  
    // accessibility (keyboard tab nav)
    $submenus.find('> .mn-link').on('focus', function(){
      $(this).closest('.mn-menu-item').trigger('mouseenter');
    });
    $submenus.find('a:last').on('blur', function(){
      $(this).closest('.mn-item-lvl-1').trigger('mouseleave');
    });
  
    // sticky things on scroll
    var bannerHeight = $menuline.closest('.site-banner').height();
    $menuline.closest('.site-banner').addClass('is-stuck');
    var bannerHeightStuck = $menuline.closest('.site-banner').height();
    $menuline.closest('.site-banner').removeClass('is-stuck');
    var lastScrollPosition = 0;
    var quicklinks = document.querySelector('#zone3 .quicklinks')

    $( window ).on('scroll mousewheel DOMMouseScroll MozMousePixelScroll', { mousewheel: { behavior: 'debounce', delay: 500 } }, function(event){
      clearTimeout(scrolltimer);

      scrolltimer = setTimeout(function(){
        var currentScrollPosition = window.pageYOffset;

        if(window.pageYOffset >= bannerHeight + 120) {
          if (currentScrollPosition < lastScrollPosition) {
            $menuline.closest('.site-banner').addClass('scroll-down').removeClass('scroll-up');
            if(quicklinks) {
              quicklinks.classList.add('scroll-down');
            }
          } else if( currentScrollPosition > lastScrollPosition) {
            $menuline.closest('.site-banner').addClass('scroll-up').removeClass('scroll-down');
            if(quicklinks && quicklinks.classList.contains('scroll-down')) {
              quicklinks.classList.remove('scroll-down');
            }
          }
        } else {
          $menuline.closest('.site-banner').removeClass('scroll-up').removeClass('scroll-down');
          if(quicklinks && quicklinks.classList.contains('scroll-down')) {
            quicklinks.classList.remove('scroll-down');
          }
        }


        if (  $(window).scrollTop() > bannerHeight - bannerHeightStuck + 175 ) {
          $menuline.closest('.site-banner').addClass('is-stuck');
          if( $('.is-contentPusher').length === 0) {
            var decal = bannerHeight;
            $menuline.closest('.site-banner').before('<div class="is-contentPusher" style="height: '+decal+'px" ></div>');
            //console.log(bannerHeightStuck);
          }
          if( $('body').length === 0 && /iP(ad|hone|od)/.test(navigator.userAgent)){
            //correctif iPad
            $menuline.closest('.site-banner').find('.header-intro').hide().show(0);
          }
        }
        else {
          $('.is-contentPusher').remove();
          $menuline.closest('.site-banner').removeClass('is-stuck');
        }

        lastScrollPosition = currentScrollPosition;
  
      }, 0);
    });
  
    $( window ).resize( function(event) {
      clearTimeout(scrolltimer);
      resizetimer = setTimeout(function(){
        //console.log('resize');
  
        $('.site-banner > .inside > .header-intro').outerHeight($(window).height());
      });
    });
  })(jQuery);
