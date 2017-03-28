$(document).ready(function(){
	

		$(document).on("click", ".nav-link", function(){
		    var section = $(this).attr("href");
		    console.log(section);
		    $("html, body").animate({
		        scrollTop: $(section).offset().top
		    });
		});

});




