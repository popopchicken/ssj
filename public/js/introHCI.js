'use strict';
/*
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})*/

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//$("#testjs").click(function(e) {
		//$('.jumbotron h1').text("Javascript is connected");
		//$('#testjs').text("clicked!");
		//$(".jumbotron p").toggleClass("active");
//	});
$('#newProjectSubmitButton').click(function(e) {
		console.log('clicked');
		var sender = $('#new-project-form #sender').val();
		var message = $('#new-project-form #message').val();
		var json = {
			'sender': sender,
			'message':  message
		};
		$.post('/messages', json, function() {
			window.location.href = '/'; // reload the page
		});
	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	//$("a.thumbnail").click(projectClick);
	//$("#submitBtn").click(updateProject); 
}

/**function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

     var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
    	$(description).hide();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}
*/

