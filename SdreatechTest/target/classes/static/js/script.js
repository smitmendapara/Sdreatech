// render new form for every player
function newForm() {
	let form = "<form class='playerForm' >" + 
					"<br />------------------------- Player Information ----------------------------" +	
					
					"<br /><br />"+
					"<div class='subform' style='margin-top: 10px'>" +
						"<div class='innerDiv'>" +
							"Player Name : <input type='text' name='playerName' class='__playerName' /><br /><br />" +
							"Player Email : <input type='text' name='playerEmail' class='__playerEmail' /><br /><br /> " +
							"Player Gender : <input type='radio' name='playerGender' class='__playerGender' value='Male'> Male <input type='radio' name='playerGender' class='__playerGender' value='Female'> Female <br /><br /> " +
											    
							"Player Nationality : <select name='nationatily' class='__playerNationality'>" +
													 	"<option value='India'>India</option>" +
													 	"<option value='USA'>USA</option>" +
													 	"<option value='Australia'>Australia</option>" +
													 	"<option value='South Africa'>South Africa</option>" +
													 	"<option value='New Zealand'>New Zealand</option>" +
												  "</select> <br /><br />" +
												  
							"<button type='button' class='new'>Add Player</button>&nbsp;&nbsp;" +
							"<button type='button'>Delete</button>" +
						"</div>	" +		
					"</div>" + 
					
				"</form>";
	
	// append every form with parent div element
	$("div.addForm").append(form);
	
	// set onclick event handler on button
	$('.new').on('click', function() {
		newForm();
	});
}

// insert table data into database
function insertData() {
	
	// serialize every team form element 
	let teamInformation = $('.teamForm').serialize();
	
	// by default space(" ") generate in form serializing
	teamInformation = teamInformation.replaceAll("+", " ");
	
	// serialize every player form element
	let playerInformation = $('.playerForm').serialize();
	
	// by default (%40 generate in form serializing
	playerInformation= playerInformation.replaceAll("%40", "@"); 

    // call execute post ajax request for team information
	executePOSTRequest({ url: "doRegisterTeam", data: { teamInformation }, callback: getSuccess });

	// call execute post ajax request for player information
	executePOSTRequest({ url: "doRegisterTeam", data: { playerInformation }, callback: getSuccess });
	
}

// callback response 
function getSuccess(response) {
	
	console.log("callback success!" + response);
}

// post request
function executePOSTRequest(request)
{
    $.ajax({

        type: "POST",

		contentType: "application/json; charset=utf-8",

        cache: false,

        timeout: 180000,

        data: request.data,

        url: request.url,

        success: function (data) {

            let myCallback;

            if (request.callback !== undefined)
            {
                myCallback = $.Callbacks();

                myCallback.add(request.callback);

                request.data = data;

                myCallback.fire(request);

                myCallback.remove(request.callback);
            }

        },
        error: function () {

            console.log("error");
        }

    });
}