function displayAffirmation(response) {
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
	
	//build API url
		let apiKey = "00a6bfb9b6053b4664t55oaa8c181e51";
		let context = "You are a world-class motivational coach, and I would like you to give words of affirmations.  Make sure you follow the user instructions.";
		let prompt = "User instructions: Send me an affirmation for women only.  Affirmation should be subject specific.  Include the affirmation and a love heart only in your response, followed by a <br>, then add 'SheCodes AI' inside a <strong> element. ";
		let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
		let affirmationElement = document.querySelector("#affirmation");
		affirmationElement.classList.remove("hidden");
		affirmationElement.innerHTML = `<div class="generating">⏳</div> generating your ${affirmationType} affirmation ♥️`;
		axios.get(url).then(displayAffirmation);
	}


let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

