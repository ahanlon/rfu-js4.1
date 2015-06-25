$(document).on('ready', function(){


// JS4.1 Part I

	$(".button-addTxt").on("click", function() {
		console.log("The button was clicked");
		$("body").append("This text showed up here because you clicked the button");
	});


	$(".button-addHdr").on("click", function() {
		$("body").append("<h1>Added New Section</h1>");
	});

	$(".button-addUl").on("click", function() {
		$("body").append("<ul><li>one</li><li>two</li><li>three</li></ul>");
	});

	// JS4.1 Part II

	$("p").on("mouseover", function(){
		$(this).css("color", "pink");
	});

	$("p").on("mouseout", function(){
		$(this).css("color", "black");
	});


	$(".heading").append("<span>!!<span>");

	$('a').on("click", function(){
		var go = confirm("Are you sure you want to navigate away from this page??");
		if (!go){
			$(this).hide();
			return false;
		}
	});


	// JS4.1 Part III

	$("button").on("click", function(){
		$("button").append("<div class=popup>This is my popup<button class=btn-close>Close</button></div>");
	})







});