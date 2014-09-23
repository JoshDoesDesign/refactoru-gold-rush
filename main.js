
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

    // On click of Submit button....
    $(document).on('click', 'button', function(e) {
        var savedValue = $("textarea").val();  // Store the value into a variable
        $(this).parent().parent().append("<div class = 'note-saved'>" + savedValue + "</div>"); // Append the savedValue after the marker
        $(this).parent().parent().find(".note-saved").hide();
        $(this).parent().remove();   // Remove the text box

       

        // stop previous click event to keep generating when you click submit
        e.stopPropagation();
    });


      $(document).on('mouseenter', '.the-marker', function() {
            $(this).siblings('.note-saved').show();   // Now show the note value
      });        
      $(document).on('mouseleave', '.the-marker', function() {
            // $(this).closest('div').find('div').show();
            $(this).siblings('.note-saved').hide();   // Now show the savedValue
      });

    // On click of existing 'the-marker', remove the marker and remove the textbox
    $(document).on('click', '.the-marker', function(e) {
        // Remove the parent (the entire div holding everything)
        $(this).parent().remove();    
        e.stopPropagation();
    });

});	