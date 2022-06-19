// render new form for every player
let count = 1;

function newForm() {
	
	let form = "<form class='playerForm' >" + 
					"<br />------------------------- Player Information ----------------------------" +	
					
					"<br /><br />"+
					"<div class='subform' style='margin-top: 10px'>" +
						"<div class='innerDiv'>" +
							"Player Name : <input type='text' name='playerName' class='__playerName' required/><br /><br />" +
							"Player Email : <input type='text' name='playerEmail' class='__playerEmail' required/><br /><br /> " +
							"Player Gender : <input type='radio' name='playerGender' class='__playerGender' value='Male' required> Male <input type='radio' name='playerGender' class='__playerGender' value='Female' required> Female <br /><br /> " +
											    
							"Player Nationality : <select name='nationatily' class='__playerNationality'>" +
													 	"<option value='India'>India</option>" +
													 	"<option value='USA'>USA</option>" +
													 	"<option value='Australia'>Australia</option>" +
													 	"<option value='South Africa'>South Africa</option>" +
													 	"<option value='New Zealand'>New Zealand</option>" +
												  "</select> <br /><br />" +
												  
							"<button type='button' class='new'>Add Player</button>&nbsp;&nbsp;" +
							"<button type='button' class='__playerForms' data-value='"+ count + "' onclick='deleteForm()'>Delete</button>" +
						"</div>	" +		
					"</div>" + 
					
				"</form>";
				
	count = count + 1;		
	
	// append every form with parent div element
	$("div.addForm").append(form);
	
	// set onclick event handler on button
	$('.new').on('click', function() {
		
		if (document.forms.length - 1 >= 1) {
			$('.__playerForms').css({display: 'block'})
		}
		newForm();
	});
}

// insert table data into database
function insertData() {
	
	let teamTitle = $('.__teamTitle').val();
	let sortName = $('.__sortName').val();
	let manageBy = $('.__manageBy').val();
	
	// call execute post ajax request for team information
	executePOSTRequest({ url: "doRegisterTeam", data: { "teamTitle": teamTitle, "sortName": sortName, "manageBy": manageBy }, callback: getSuccess });

	let formLength = document.forms.length - 1;
	
	let myForms = document.getElementsByClassName("playerForm");
	
	for (let index = 0; index < formLength; index++) {
		
		let playerName = myForms[index][0].value;
		let playerEmail= myForms[index][1].value;
		let playerGender;
		if (myForms[index][2].checked == true) {
			playerGender = myForms[index][2].value;
		}
		else {
			playerGender = myForms[index][3].value;
		}
		let playerNationality = myForms[index][4].value
		
		// call execute post ajax request for player information
		executePOSTRequest({ url: "doRegisterPlayer", data: { "playerName": playerName, "playerEmail": playerEmail, "playerGender": playerGender, "playerNationality": playerNationality }, callback: getSuccess });
	}
 
}

function deleteForm() {
	
	if (document.forms.length - 1 >= 1) {
		
		let param = event.currentTarget.getAttribute('data-value');
		
		event.currentTarget.parentElement.parentElement.parentElement.remove();
		
		let playerEmail = event.currentTarget.parentElement.children.playerEmail.value;
		
		executePOSTRequest({ url: "deleteData", data: { "playerEmail": playerEmail } });
	}
}

// callback response 
function getSuccess(response) {
	
	console.log("callback success!" + response);
}

// post request
function executePOSTRequest(request) {
	
    $.ajax({

        type: "POST",

		contentType : 'application/json; charset=utf-8',
        
        dataType : 'json',
        
        cache: false,

        timeout: 180000,

        data: JSON.stringify(request.data),

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

            console.log("POST request break!");
        }

    });
}
