(function ( $ ) {

	"use strict";

	/* Team Slider Initialize */
	wp_tsas_team_slider_init();

	/* Popup Gallery Initialize */
	wp_tsas_popup_gallery_init();
	
	/* Elementor Compatibility */
	$(document).on('click', '.elementor-tab-title', function() {

		var ele_control	= $(this).attr('aria-controls');
		var slider_wrap	= $('#'+ele_control).find('.wp_teamshowcase_slider');

		$( slider_wrap ).each(function( index ) {

			var slider_id = $(this).attr('id');
			$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

			/* Tweak for slick slider */
			setTimeout(function() {
				if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
					$('#'+slider_id).slick( 'setPosition' );
					$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
				}
			}, 350);
		});
	});

	/* SiteOrigin Compatibility For Accordion Panel */
	$(document).on('click', '.sow-accordion-panel', function() {

		var ele_control	= $(this).attr('data-anchor');
		var slider_wrap	= $('#accordion-content-'+ele_control).find('.wp_teamshowcase_slider');

		/* Tweak for slick slider */
		$( slider_wrap ).each(function( index ) {

			var slider_id = $(this).attr('id');

			/* Tweak for slick slider */
			if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
				$('#'+slider_id).slick( 'setPosition' );
			}
		});
	});

	/* SiteOrigin Compatibility for Tab Panel */
	$(document).on('click focus', '.sow-tabs-tab', function() {
		var sel_index	= $(this).index();
		var cls_ele		= $(this).closest('.sow-tabs');
		var tab_cnt		= cls_ele.find('.sow-tabs-panel').eq( sel_index );
		var slider_wrap	= tab_cnt.find('.wp_teamshowcase_slider');

		/* Tweak for slick slider */
		$( slider_wrap ).each(function( index ) {

			var slider_id = $(this).attr('id');
			$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

			setTimeout(function() {
				if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
					$('#'+slider_id).slick( 'setPosition' );
					$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
				}
			}, 300);
		});
	});

	/* Beaver Builder Compatibility for Accordion and Tabs */
	$(document).on('click', '.fl-accordion-button, .fl-tabs-label', function() {

		var ele_control	= $(this).attr('aria-controls');
		var slider_wrap	= $('#'+ele_control).find('.wp_teamshowcase_slider');

		/* Tweak for filter */
		$( slider_wrap ).each(function( index ) {

			var slider_id = $(this).attr('id');
			$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

			setTimeout(function() {
				if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
					$('#'+slider_id).slick( 'setPosition' );
					$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
				}
			}, 300);
		});
	});

	/* Divi Builder Compatibility for Accordion & Toggle */
	$(document).on('click', '.et_pb_toggle', function() {

		var acc_cont	= $(this).find('.et_pb_toggle_content');
		var slider_wrap	= acc_cont.find('.wp_teamshowcase_slider');

		/* Tweak for slick slider */
		$( slider_wrap ).each(function( index ) {

			var slider_id = $(this).attr('id');

			if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
				$('#'+slider_id).slick( 'setPosition' );
			}
		});
	});

	/* Divi Builder Compatibility for Tabs */
	$('.et_pb_tabs_controls li a').click( function() {
		var cls_ele		= $(this).closest('.et_pb_tabs');
		var tab_cls		= $(this).closest('li').attr('class');
		var tab_cont	= cls_ele.find('.et_pb_all_tabs .'+tab_cls);
		var slider_wrap	= tab_cont.find('.wp_teamshowcase_slider');

		setTimeout(function() {

			/* Tweak for slick slider */
			$( slider_wrap ).each(function( index ) {

				var slider_id = $(this).attr('id');

				$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

				if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
					$('#'+slider_id).slick( 'setPosition' );
					$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
				}
			});
		}, 550);
	});

	/* Fusion Builder Compatibility for Tabs */
	$(document).on('click', '.fusion-tabs li .tab-link', function() {
		var cls_ele		= $(this).closest('.fusion-tabs');
		var tab_id		= $(this).attr('href');
		var tab_cont	= cls_ele.find(tab_id);
		var slider_wrap	= tab_cont.find('.wp_teamshowcase_slider');

		/* Tweak for slick slider */
		$( slider_wrap ).each(function( index ) {
			var slider_id = $(this).attr('id');
			$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

			setTimeout(function() {
				if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
					$('#'+slider_id).slick( 'setPosition' );
					$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
					$('#'+slider_id).slick( 'setPosition' );
				}
			}, 200);
		});
	});

	/* Fusion Builder Compatibility for Toggles */
	$(document).on('click', '.fusion-accordian .panel-heading a', function() {
		var cls_ele		= $(this).closest('.fusion-accordian');
		var tab_id		= $(this).attr('href');
		var tab_cont	= cls_ele.find(tab_id);
		var slider_wrap	= tab_cont.find('.wp_teamshowcase_slider');

		/* Tweak for slick slider */
		$( slider_wrap ).each(function( index ) {
			var slider_id = $(this).attr('id');
			$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

			setTimeout(function() {
			if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
				$('#'+slider_id).slick( 'setPosition' );
				$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
				$('#'+slider_id).slick( 'setPosition' );
			}
			}, 200);
		});
	});

})(jQuery);

/* Function to initialize Team Slider */
function wp_tsas_team_slider_init() {
	jQuery( '.wp_teamshowcase_slider' ).each(function( index ) {

		if( jQuery(this).hasClass('slick-initialized') ) {
			return;
		}

		// Flex Condition
		if(WpTsas.is_avada == 1) {
			jQuery(this).closest('.fusion-flex-container').addClass('wp-tsas-fusion-flex');
		}

		var slider_id   = jQuery(this).attr('id');
		var slider_conf = jQuery.parseJSON( jQuery(this).closest('.wp-tsas-slider-wrap').find('.slider-conf-data').attr('data-conf'));

		if( typeof( slider_id) != 'undefined' &&  slider_id != '' ) {
			jQuery('#'+ slider_id).slick({
				lazyLoad        : slider_conf.lazyload,
				dots			: ( slider_conf.dots == "true" )		? true : false,
				arrows			: ( slider_conf.arrows == "true" )		? true : false,
				autoplay		: ( slider_conf.autoplay == "true" )	? true : false,
				speed			: parseInt( slider_conf.speed ),
				autoplaySpeed	: parseInt( slider_conf.autoplay_interval ),
				slidesToShow	: parseInt( slider_conf.slides_column ),
				slidesToScroll	: parseInt( slider_conf.slides_scroll ),
				infinite 		: true,
				responsive 		: [{
					breakpoint 	: 1023,
					settings 	: {
						slidesToShow 	: ( parseInt( slider_conf.slides_column ) > 3 ) ? 3 : parseInt( slider_conf.slides_column ),
						slidesToScroll	: parseInt( slider_conf.slides_scroll ),
					}
				},{
					breakpoint	: 767,
					settings	: {
						slidesToShow 	: ( parseInt( slider_conf.slides_column ) > 3 ) ? 3 : parseInt( slider_conf.slides_column ),
						slidesToScroll	: parseInt( slider_conf.slides_scroll ),
					}
				},{
					breakpoint	: 639,
					settings	: {
						slidesToShow 	: 1,
						slidesToScroll 	: 1,
					}
				},{
					breakpoint	: 479,
					settings	: {
						slidesToShow 	: 1,
						slidesToScroll 	: 1,
					}
				},{
					breakpoint	: 319,
					settings	: {
						slidesToShow 	: 1,
						slidesToScroll 	: 1,
					}
				}]
			});
		}
	});
};

/* Function to initialize Popup Gallery */
function wp_tsas_popup_gallery_init() {
	jQuery( '.tsas-enable-popup' ).each(function( index ) {
		var popup_id   = jQuery(this).attr('id');
		
		if( typeof(popup_id) != 'undefined' ) {
			
			jQuery('#'+popup_id).magnificPopup({
				mainClass: 'mfp-fade wp-tsas-popup-wrp',
				delegate:'.teamshowcase-hover-icon',
				removalDelay: 160,
				preloader: false,
				type:'inline',
				fixedContentPos:false,
			});
		}
	});
}