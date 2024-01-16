import { gameConstants } from "./gameConstants.js";
import { initialIssue } from "./initialIssue.js";
const pathWin = new URL("../images/awesome.png", import.meta.url);
const pathLost = new URL("../images/gameover.png", import.meta.url);

export const resultGame = isWin => {
	const backdropEl = document.querySelector(".backdrop");
	const imageEl = document.querySelector(".modal__img");
	const titleEl = document.querySelector(".modal__current-word");
	const buttonEl = document.querySelector(".modal__btn");
	const keyboardEl = document.querySelectorAll(".keyboard__letter");

	backdropEl.classList.remove("backdrop--is-hidden");
	imageEl.innerHTML = `<img src=${isWin ? pathWin : pathLost} alt=${isWin ? "You-are-awesome" : "Game-over"}>`;
	titleEl.textContent = gameConstants.currentWord;

	const onClick = () => {
		backdropEl.classList.add("backdrop--is-hidden");

		keyboardEl.forEach(item => (item.disabled = false));
		for (let i = 1; i <= gameConstants.mistakeCounter; i += 1) {
			document.querySelector(`#hanged-man-${i}`).classList.remove("hangman__svg--visible");
		}
		gameConstants.currentWordArray = [];
		gameConstants.mistakeCounter = 0;
		gameConstants.currentWord = "";
		gameConstants.selectLetter = [];
		initialIssue();

		buttonEl.removeEventListener("click", onClick);
	};

	buttonEl.addEventListener("click", onClick);
};
