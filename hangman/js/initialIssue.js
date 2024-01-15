import { questionsData } from "./questionsData.js";

const MAX_MISTAKE = 6;
let mistakeCounter = 0;
const issueList = [];

const getRandomElement = length => {
	console.log("length", length);
	return Math.floor(Math.random() * length);
};

const renderPuzzle = question => {
	const { word, hint } = question;

	const wordWrapEl = document.querySelector(".puzzle__word");
	const questionEl = document.querySelector(".puzzle__question");
	const counterEl = document.querySelector(".puzzle__counter-mistake");

	console.log("currentWord - ", word);

	wordWrapEl.innerHTML = [...word]
		.map(
			letter => `<li>
	  <span data-letter="${letter.toUpperCase()}">${letter.toUpperCase()}</span>
	</li>`,
		)
		.join("");

	questionEl.textContent = hint;
	counterEl.textContent = `${mistakeCounter} / ${MAX_MISTAKE}`;
};

export const initialIssue = () => {
	if (!issueList.length) {
		issueList.push(...questionsData);
	}

	const [newIssue] = issueList.splice(getRandomElement(issueList.length), 1);

	renderPuzzle(newIssue);
};
