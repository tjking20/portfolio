$(document).ready(function(){
	
	//function scrolls to appropriate sections of page
	$(document).on("click", ".nav-link", function(){
	    var section = $(this).attr("href");
	    console.log(section);
	    console.log(this);
	    $("html, body").animate({
	        scrollTop: $(section).offset().top
	    });
	});




	//fades name on home page
	$(window).scroll(function(){
	    $("#home").css("opacity", 1 - 
	    $(window).scrollTop() / 290);
	});

	// $(".projects").hover(function(){
	// 	$(".trans").slideToggle();
	// });


});




