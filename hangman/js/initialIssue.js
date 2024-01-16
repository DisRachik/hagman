import { gameConstants } from "./gameConstants.js";
import { questionsData } from "./questionsData.js";

const getRandomElement = length => Math.floor(Math.random() * length);

export const renderMistakeCounter = () => {
	const counterEl = document.querySelector(".puzzle__counter-mistake");
	counterEl.textContent = `${gameConstants.mistakeCounter} / ${gameConstants.MAX_MISTAKE}`;
};

const renderPuzzle = question => {
	const { word, hint } = question;

	const wordWrapEl = document.querySelector(".puzzle__word");
	const questionEl = document.querySelector(".puzzle__question");

	console.log("currentWord - ", word);

	gameConstants.currentWordArray = [...word.toUpperCase()];
	gameConstants.currentWord = word.toUpperCase();

	wordWrapEl.innerHTML = gameConstants.currentWordArray
		.map(
			letter => `<li class="puzzle__letter" data-letter="${letter}">
	  <span>${letter}</span>
	</li>`,
		)
		.join("");

	questionEl.textContent = hint;
	renderMistakeCounter();
};

export const initialIssue = () => {
	if (!gameConstants.issueList.length) {
		gameConstants.issueList.push(...questionsData);
	}

	const [newIssue] = gameConstants.issueList.splice(getRandomElement(gameConstants.issueList.length), 1);

	renderPuzzle(newIssue);
};
