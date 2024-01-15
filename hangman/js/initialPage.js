const path = new URL("../images/gallows.svg", import.meta.url);

const generateKeyboard = () => {
	let result = "";
	for (let i = 65; i <= 90; i += 1) {
		result += `
      <button class="keyboard__letter" type="button">${String.fromCharCode(i)}</button>
    `;
	}
	return result;
};

export const initialPage = () => {
	return `
  <div class="canvas">
    <div class="hangman">
      <svg class="hangman__svg" width="372" height="581" aria-label="the image of the hangman">
        <use href="${path.toString()}"></use>
      </svg>
      <h1 class="hangman__title">HANGMAN GAME</h1>
    </div>

    <div class="puzzle">
      <ul class="puzzle__word"></ul>
      <p class="puzzle__hint">Hint: <span  class="puzzle__question"></span></p>
      <p class="puzzle__mistake">Incorrect guesses: <span  class="puzzle__counter-mistake"></span></p>
      <div class="keyboard" aria-label="keyboard">${generateKeyboard()}</div>
    </div>
  </div>
  `;
};
