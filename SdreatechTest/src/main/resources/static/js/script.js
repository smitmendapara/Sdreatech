console.log("file called!");

function newForm() {
	let form = "<form class='playerForm' th:action='@{/do_register}' th:object='${player}' method='post'>" + 
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
	
	$("div.addForm").append(form);
	
	$('.new').on('click', function() {
		newForm();
	});
}

function insertData() {
	
	let teamInformation = $('.teamForm').serialize();
	
	teamInformation = teamInformation.replaceAll("+", " ");
	
	let playerInformation = $('.playerForm').serialize();
	
	playerInformation= playerInformation.replaceAll("%40", "@"); 
	
	console.log(teamInformation);
	console.log(playerInformation);

	executePOSTRequest({ url: "doRegisterTeam", data: { teamInformation }, callback: getSuccess });

	

}

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