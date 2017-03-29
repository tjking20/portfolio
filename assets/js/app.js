$(document).ready(function(){
	

		$(document).on("click", ".nav-link", function(){
		    var section = $(this).attr("href");
		    console.log(section);
		    console.log(this);
		    $("html, body").animate({
		        scrollTop: $(section).offset().top
		    });
		});

});

$(window).scroll(function(){
    $("#home").css("opacity", 1 - 
    $(window).scrollTop() / 290);
  });


// $(document).ready(function(){		
// 	var offset = 49;	
// 	$(document).on("click", ".nav-link", function(){
// 	    var section = $(this).attr("href");
// 	    console.log(section);
// 	    $("html, body").animate({
// 	        scrollTop: $(section).offset().top - offset
// 	    });
// 	});
// });

