// Generate computer answers, check user answers, show points and results, finish round,
// when stop button is pressed 
document.getElementById("stopBtn").addEventListener("click", stopButtonPress);

function stopButtonPress() {
	$('#stopButtonDiv').removeClass('showMyClass');
	$('#stopButtonDiv').addClass('hide');
	$('#finishRdBtn').removeClass('hide');
	chooseLetter();
    gameRoundInitialize(selCategor, roundLetter);
    showCounter();
}
// find random number as use as a index for alphabet variable to set the round letter
function chooseLetter() {
	var ltrIndicator = Math.floor(Math.random() * currentGameAlphabet.length);
	roundLetter = currentGameAlphabet[ltrIndicator];
	currentGameAlphabet.splice(ltrIndicator, 1);
	var htmlLetter = "<span class='showLetter'>" + roundLetter + "</span>";
	$('#startInit').html(htmlLetter);
}
// add user input for each category with selected letter
function gameRoundInitialize(selCategor, roundLetter) {
	$('#roundInput').html("");
	for (var i = 0; i < selCategor.length; i++) {
		var htmlFormContent = "<div class='form-group'><label for='" + selCategor[i] + "'>" + selCategor[i] + "</label><input type='text' class='form-control' id='usrAnsw" + selCategor[i] + "' placeholder='" + roundLetter + "'></div>";
		$('#roundInput').append(htmlFormContent);
	};
}

// create function for round time counter which will start counting from 15 to 0 after time set by difficult level
async function showCounter(){
    console.log(difLvlTime);
    await sleep(difLvlTime);
    $("#endCountDiv").css('display', 'block');
    for (var x = 15; x >= 0; x--){
        console.log(x);
    $("#endCount").html(x);
    await sleep(1000);
    if (FinishRndBtnClick == 1){
        break
    }
    if ( x == 0){
        finishRound();
    }
};
};


let RoundCounter = 0;
let FinishRndBtnClick = 0; // variable to stop counting round time if user press finish round button

// action for finish round button in game round section
document.getElementById("finishRdBtn").addEventListener("click", finishRound);

function finishRound(){
    FinishRndBtnClick = 1;
    $("#roundPopUp").css("display", "none");
    $("#roundFinishPopUp").css("display", "block");
    getUserAnswers();
};

    


// get user answers and save in array userAllAnswers

function getUserAnswers()
{

    gameResults.push([RoundCounter]); //add round number to the gameResults array

    $("#roundInput").ready(function ()
    {
        for (i = 0; i < selCategor.length; i++)
        {
            var answerIdBase = "usrAnsw";
            var answerIdFull = answerIdBase + selCategor[i];
            var usrAnswer = $('#' + answerIdFull).val(); //get user answer for each category
            gameResults[RoundCounter].push(usrAnswer); //add each user answer to game Result array
        };
        console.log(gameResults);
    });
};

function generatePCAnswers(){
    
}