import { initialPage } from "./js/initialPage.js";
import { initialIssue } from "./js/initialIssue.js";
import { selectLetter } from "./js/selectLetter.js";

import { gameConstants } from "./js/gameConstants.js";

const handleKeyboardLetter = ({ code, key }) => {
	if (!code.startsWith("Key")) {
		return;
	}

	const letter = code.slice(-1);

	if (gameConstants.selectLetter.includes(letter)) {
		return;
	}

	if (letter === key.toUpperCase()) {
		selectLetter(letter);
		return;
	}

	alert("You need to select the English keyboard layout...");
};

const handleVirtualKeyboardLetter = ({ target }) => {
	if (target.nodeName !== "BUTTON") {
		return;
	}
	selectLetter(target.textContent);
};

(async () => {
	const page = document.querySelector("body");
	page.innerHTML = await initialPage();

	initialIssue();

	const keyboardEl = document.querySelector(".keyboard");

	document.addEventListener("keydown", handleKeyboardLetter);
	keyboardEl.addEventListener("click", handleVirtualKeyboardLetter);
})();
