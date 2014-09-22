
$(document).on('ready', function() {

	$(document).on('click', function(e) {
  		var marker = $("<div><img class='the-marker' src='http://www.clker.com/cliparts/j/4/u/5/C/k/marker.svg'></div>");
  		$(".container").append(marker);
  		marker.css ({
  			position: "absolute",
  			left: e.pageX,
  			top: e.pageY
  		});
  		var message = $('<div><textarea class = "note" placeholder="Enter a note for this marker:"></textarea><button>Submit</button></div>');
  		marker.append(message);
  		$("textarea").focus();
  	});

  	$(document).on('click', 'button', function() {
  		console.log("this button works");
  		var savedValue = $(".note").val();
		$(this).parent().hide();
		// $(this).stopPropagation();
  	});

  	$(document).on('click', '.the-marker', function(e) {
  		$(this).remove();
 		e.stopPropagation();
  	});
});	