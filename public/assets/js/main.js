// ahmedwaleed javascript here

(function(window, document, $, undefined) {
    'use strict';

    var ahmedJs = {
        i: function(e) {
            ahmedJs.d();
            ahmedJs.methods();
        },

        d: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html'),
                this.sideNav = $('.rbt-search-dropdown')
        },
        methods: function(e) {
            ahmedJs.ahmedwaleedSwiperActive();
            ahmedJs.eduBgCardHover();
            ahmedJs.stickyHeader();
            ahmedJs._clickDoc();
            ahmedJs.marqueImage();
            ahmedJs.popupMobileMenu();
            ahmedJs.headerSticky();
            ahmedJs.transparentHeader();
            ahmedJs.categoryMenuHover();
            ahmedJs.headerTopActivation();
            ahmedJs.topbarExpend();
            ahmedJs.autoslidertab();
            ahmedJs.moveAnimation();
        },


        autoslidertab: function(params) {
            function tabChange() {
                var tabs = $('.nav-tabs.splash-nav-tabs > li');
                var active = tabs.find('a.active');
                var next = active.parent('li').next('li').find('a');
                if (next.length === 0) {
                    next = tabs.first().find('a').on('click');
                }
                next.tab('show');
            }
            var tabCycle = setInterval(tabChange, 5000);
        },

        eduParalax: function() {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        },

        ahmedwaleedSwiperActive: function() {
            var swiper = new Swiper('.banner-swiper-active', {
                effect: 'cards',
                grabCursor: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
            });

            var swiper = new Swiper('.ahmedwaleed-courses-slider', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-right',
                    prevEl: '.rbt-arrow-left',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                    snapOnRelease: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper('.ahmedwaleed-events-activation', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.rbt-arrow-right',
                    prevEl: '.rbt-arrow-next',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                    snapOnRelease: true
                },
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                },
            });
        },

        eduBgCardHover: function() {
            $('.rbt-hover-active').mouseenter(function() {
                var self = this;
                setTimeout(function() {
                    $('.rbt-hover-active.active').removeClass('active');
                    $(self).addClass('active');
                }, 0);
            });
        },


        stickyHeader: function() {
            // Header Transparent
            if ($('header').hasClass('header-transparent')) {
                $('body').addClass('active-header-transparent')
            } else {
                $('body').removeClass('active-header-transparent')
            }
        },


        _clickDoc: function() {
            var inputblur, inputFocus, openSideNav, closeSideNav;
            inputblur = function(e) {
                if (!$(this).val()) {
                    $(this).parent('.form-group').removeClass('focused');
                }
            };
            inputFocus = function(e) {
                $(this).parents('.form-group').addClass('focused');
            };
            openSideNav = function(e) {
                e.preventDefault();
                ahmedJs.sideNav.addClass('active');
                $('.search-trigger-active').addClass('open');
                ahmedJs._html.addClass('side-nav-opened');
            };

            closeSideNav = function(e) {
                if (!$('.rbt-search-dropdown, .rbt-search-dropdown *:not(".search-trigger-active, .search-trigger-active *")').is(e.target)) {
                    ahmedJs.sideNav.removeClass('active');
                    $('.search-trigger-active').removeClass('open');
                    ahmedJs._html.removeClass('side-nav-opened');
                }
            };
            ahmedJs._document
                .on('blur', 'input,textarea,select', inputblur)
                .on('focus', 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', inputFocus)
                .on('click', '.search-trigger-active', openSideNav)
                .on('click', '.side-nav-opened', closeSideNav)
        },


        marqueImage: function() {
            $('.edumarque').each(function() {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function() {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },


        popupMobileMenu: function(e) {
            $('.hamberger-button').on('click', function(e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-button').on('click', function(e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function(e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rbt-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function(e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });
        },

        headerSticky: function() {
            $(window).on('scroll', function() {
                if ($('body').hasClass('rbt-header-sticky')) {
                    var stickyPlaceHolder = $('.rbt-sticky-placeholder'),
                        headerConainer = $('.rbt-header-wrapper'),
                        headerConainerH = headerConainer.outerHeight(),
                        topHeaderH = $('.rbt-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        headerConainer.addClass('rbt-sticky');
                        stickyPlaceHolder.height(headerConainerH);
                    } else {
                        headerConainer.removeClass('rbt-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        transparentHeader: function() {
            if ($('.rbt-header').hasClass('rbt-transparent-header')) {
                var mainHeader = $('.rbt-header').outerHeight();
                $('body').addClass('rbt-header-transpernt-active');
                $('.header-transperent-spacer').css('padding-top', mainHeader + 'px');
            }
        },

        categoryMenuHover: function() {
            $('.vertical-nav-menu li.vertical-nav-item').mouseover(function() {
                $('.rbt-vertical-inner').hide();
                $('.vertical-nav-menu li.vertical-nav-item').removeClass('active');
                $(this).addClass('active');
                var selected_tab = $(this).find('a').attr("href");
                $(selected_tab).stop().fadeIn();
                return false;
            });
        },

        headerTopActivation: function() {
            $('.bgsection-activation').on('click', function() {
                $(this).parents('.rbt-header-campaign').addClass('deactive')
            })
        },

        magnificPopupActivation: function() {
            $('.parent-gallery-container').magnificPopup({
                delegate: '.child-gallery-single', // child items selector, by clicking on it popup will open
                type: 'image',
                mainClass: 'mfp-with-zoom',
                // other options
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it
                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function(openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        },

        topbarExpend: function() {
            var windowWidth = $(window).width(); {
                if (windowWidth < 1199) {
                    $('.top-bar-expended').on('click', function() {
                        $('.top-expended-activation').hasClass('active') ? ($('.top-expended-activation').removeClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({
                            height: '32px'
                        })) : ($('.top-expended-activation').addClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({
                            height: ($('.top-expended-inner')).outerHeight() + 'px'
                        }))
                    })
                    $(window).on('hresize', function() {
                        $('.top-expended-activation').hasClass('active') && $('.top-expended-activation').find('.top-expended-inner').css({
                            height: ($('.top-expended-inner')).outerHeight() + 'px'
                        })
                    })
                }
            }
        },

        moveAnimation: function() {
            $('.scene').each(function() {
                new Parallax($(this)[0]);
            });
        },

    }
    ahmedJs.i();

})(window, document, jQuery);