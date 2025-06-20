$(document).ready(function() {


//NO JAVASCRIPT FIX
	$('#page2 h2').removeClass("js_enabled"); //removes the class js_enabled for the <h2> tag inside the #gallery_page div rendering it visible
        $('#twitter_js_disabled').hide();

//INITIALIZES LIGHTBOX PLUGIN
$('.gallery a').lightBox(); //targets every image iniside the specified selector


////INITIALIZES TWITTER FEED PLUGIN
$("#twitter_container").tweet({
	username: "ivanjezh",  //just enter your twitter username
	join_text: "auto",
	avatar_size: null,
	count: 1, //number of tweets showing (to avoid any issues with the design leave at 1)
	auto_join_text_default: "",
	loading_text: "" //text displayed while loading tweets
});


//NAVIGATION
	$('#page_container').cycle({ 
    fx:      'scrollDown',  //type of transition, you can also use (scrollUp, scrollLeft, scrollRight, fade...) 
    speed:    500,  //speed of transition - lower = faster
    timeout:  0, //prevents the slideshow if set to 0,
	cleartype: false,   //  Fixes the issue with IE
    startingSlide: 0 //number of the slide shown upon page load (0 = first slide)
});

//navigation links
$('#nav_1').click(function() { 
	$("ul#nav li").removeClass("active"); //removes "active" class
	$(this).addClass("active"); //adds "active" class to the tab that is selected
    $('#page_container').cycle(0); //the number of the div that will be shown on click
    return false; 
}); 

$('#nav_2').click(function() { 
	$("ul#nav li").removeClass("active");  //removes "active" class
	$(this).addClass("active"); //adds "active" class to the tab that is selected
    $('#page_container').cycle(1); //the number of the div that will be shown on click
    return false; 
	
});
	
$('#nav_3').click(function() { 
	$("ul#nav li").removeClass("active");  //removes "active" class
	$(this).addClass("active"); //adds "active" class to the tab that is selected
    $('#page_container').cycle(2); //the number of the div that will be shown on click
    return false; 
}); 

$('#nav_4').click(function() { 
	$("ul#nav li").removeClass("active");  //removes "active" class
	$(this).addClass("active"); //adds "active" class to the tab that is selected
    $('#page_container').cycle(3); //the number of the div that will be shown on click
    return false; 	
});

$('#nav_5').click(function() { 
	$("ul#nav li").removeClass("active");  //removes "active" class
	$(this).addClass("active"); //adds "active" class to the tab that is selected
    $('#page_container').cycle(4); //the number of the div that will be shown on click
    return false; 	
});

		
// CONTACT FORM 
		
$('#contact_form').ajaxForm({
	target: '#message_outcome',
		beforeSubmit: function() {
			$('#message_outcome').addClass('visible');
		},
			success: function() {
				$('#message_outcome').show();
			}
});
	
	
//PORTFOLIO NAVIGATION

$('#portfolio_slider').cycle({ 
    fx:      'fade',  
    speed:    500, 
    timeout:  0,
	cleartype: false,   //  Fixes the issue with IE6+
	startingSlide: 0
});

	//navigation to gallery page 1
	$('#to_gallery_1').click(function() { 
	$("ul#gallery_nav li").removeClass("gallery_active"); //removes "active" class
	$(this).addClass("gallery_active"); //adds "active" class to the tab that is selected
    $('#portfolio_slider').cycle(0);  //the number of the div that will be shown on click
    return false; 
	}); 
	
	//navigation to gallery page 2
	$('#to_gallery_2').click(function() { 
	$("ul#gallery_nav li").removeClass("gallery_active"); //removes "active" class
	$(this).addClass("gallery_active"); //adds "active" class to the tab that is selected
    $('#portfolio_slider').cycle(1);  //the number of the div that will be shown on click
    return false; 
	}); 
	
	
// PORTFOLIO IMAGE OPACITY

$(function() {
	$('.gallery img').animate({"opacity": 1 }); // sets the opacity to 50% to all images inside the div with the class of .gallery
	
	$('.gallery img').hover(function() {
		$(this).stop().animate({ "opacity": .6 });
		}, function() {
			$(this).stop().animate({ "opacity": 1 });
		});
});

});	





