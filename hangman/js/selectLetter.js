import { gameConstants } from "./gameConstants.js";
import { renderMistakeCounter } from "./initialIssue.js";
import { resultGame } from "./resultGame.js";

export const selectLetter = letter => {
	const keyboardEl = document.querySelectorAll(".keyboard__letter");
	const puzzleLettersEl = document.querySelectorAll(".puzzle__letter");

	[...keyboardEl].find(item => item.textContent === letter).disabled = true;
	gameConstants.selectLetter.push(letter);

	const checkLetterInWord = gameConstants.currentWordArray.filter(item => item !== letter);
	if (checkLetterInWord.length === gameConstants.currentWordArray.length) {
		gameConstants.mistakeCounter += 1;
		renderMistakeCounter();
		document.querySelector(`#hanged-man-${gameConstants.mistakeCounter}`).classList.add("hangman__svg--visible");

		if (gameConstants.MAX_MISTAKE === gameConstants.mistakeCounter) {
			resultGame(false);
		}
		return;
	}
	gameConstants.currentWordArray = checkLetterInWord;

	puzzleLettersEl.forEach(item => {
		if (item.dataset.letter === letter) {
			item.classList.add("puzzle__letter--open");
		}
	});

	if (gameConstants.currentWordArray.length === 0) {
		resultGame(true);
	}
};
