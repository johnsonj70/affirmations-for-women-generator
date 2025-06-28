function generateAffirmation(event) {
    event.preventDefault();

    new Typewriter("#affirmation", {
		strings: "I am worthy of love. I am proud of myself, and I am enough.",
		autoStart: true,
		cursor: "",
		delay: 0.5,
	});
}

let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

