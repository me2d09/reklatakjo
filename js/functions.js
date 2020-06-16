

// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
	jQuery('html').addClass('osx');
}

// Countdown timer
update = function () {
    var units = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
    //var start = new Date(2014, 7, 27, 23, 0, 0),
    var start = new Date(2014, 7, 14, 15, 15, 0),
	ts = countdown(start, null, units, null, 0);
    var msg = ts.toHTML('strong') || "nyní!";    
    $("#counter").html(msg);
}


// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";  

$('#slides').backstretch("img/header.jpg");

Modernizr.addTest('cssvhunit', function() {
    var bool;
    Modernizr.testStyles("#modernizr { height: 50vh; }", function(elem, rule) {   
        var height = parseInt(window.innerHeight/2,10),
            compStyle = parseInt((window.getComputedStyle ?
                      getComputedStyle(elem, null) :
                      elem.currentStyle)["height"],10);

        bool= !!(compStyle == height);
    });
    return bool;
});


$('.animated').appear(function() {
  $(this).each(function(){   
    $(this).css('visibility','visible');
    $(this).addClass($(this).data('type'));
  });
},{accY: -150});


/* 	PRETTYPHOTO */
$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', slideshow: 3000, autoplay_slideshow: false, social_tools: false, deeplinking:false, theme: 'facebook', overlay_gallery: false, }); 


/*  STICKY 	*/

$('.navbar').sticky({topSpacing:15});


/* nav */ 
  
$('.navbar, .select-menu').onePageNav({
  currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollOffset: 60,
	scrollThreshold: 0.1,
	filter: '',
	easing: 'swing',
});

/* 	MOBILE MENU	*/
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Navigation"
	}).appendTo(".select-menu");


	$(".nav a").each(function() {
	 var select = $(this);
	 $("<option />", {
	     "value"   : select.attr("href"),
	     "text"    : select.attr("title")
	 }).appendTo(".select-menu");
	});
  
  


// jQuery(".player").mb_YTPlayer();

/* SCROLL 	*/

  
$(".select-menu").change(function() {
	
		$('html, body').animate({
	        scrollTop: $($(this).find("option:selected").val()).offset().top
	    }, 750, function(){
	    	window.location.hash = $(this).find("option:selected").val();
	    });
	});



/* FITTEXT */		
    $(".fittext1").fitText(1, { minFontSize: '15px', maxFontSize: '30px' });
    $(".fittext2").fitText(0.4, { minFontSize: '30px', maxFontSize: '86px' });
    $(".fittext3").fitText(0.4, { minFontSize: '15px', maxFontSize: '45px' });
    $(".fittext4").fitText(1.5, { minFontSize: '15px', maxFontSize: '24px' });

/* 	External Links	*/	

	(function() {
	    $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});                                            
	})();  



    $(function() {
    if (!Modernizr.cssvhunit) {
        var windowH = $(window).height();
        $('#slides').css({'height':($(window).height())+'px'});
    }
    });

/* preloading */
 
$(window).load(function() {
	$("#loadind").fadeOut();
	$("#loading-wrap").delay(150).fadeOut("fast");
})

/* tooltip for menu */
$(".nav *").tooltip({
    position: {
        my: "center-1 top+18",
        at: "center bottom",
        using: function (position, feedback) {
            $(this).css(position);
            $("<div>")
.appendTo(this);
        },
        show: {
            effect: "slideDown",
            delay: 0
        }
    }
});

/* UPDATE COUNTER */
update();
window.setInterval(update, 1000);

}); 