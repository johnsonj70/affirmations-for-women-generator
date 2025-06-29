function displayAffirmation(response) {
	console.log("affirmation generated");
	//Display the generated affirmation
	new Typewriter("#affirmation", {
		strings: response.data.answer,
		autoStart: true,
		cursor: "",
		delay: 0.5,
	});
}


function generateAffirmation(event) {
    event.preventDefault();

	let affirmationType = document.querySelector("#user-instructions");
	affirmationType = affirmationType.value;
	console.log(affirmationType);
	
	 if (affirmationType === "daily") {
		
		//build API url
	let apiKey = "00a6bfb9b6053b4664t55oaa8c181e51";
	let context = "You are a world-class motivation coach, and I would like you to give words of affirmations";
	let prompt = "Send me an affirmation for women only.  Include the affirmation only in your response.";
	let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
	axios.get(url).then(displayAffirmation);
		console.log("generating affirmation");
	}

	else {
		alert("Please type 'daily' for an affirmation");
		affirmationType = "";
	}
	
}


let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

