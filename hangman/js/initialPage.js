const path = new URL("../images/gallows.svg", import.meta.url);

let svgString = null;
async function fetchSVG() {
	try {
		const response = await fetch(path);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.text();
		svgString = result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
	} catch (error) {
		console.error("Помилка при отриманні SVG:", error);
	}
}

const generateKeyboard = () => {
	let result = "";
	for (let i = 65; i <= 90; i += 1) {
		result += `
      <button class="keyboard__letter" type="button">${String.fromCharCode(i)}</button>
    `;
	}
	return result;
};

export const initialPage = async () => {
	await fetchSVG();

	return `
  <div class="canvas">
    <div class="hangman">
      ${svgString}
      <h1 class="hangman__title">HANGMAN GAME</h1>
    </div>

    <div class="puzzle">
      <ul class="puzzle__word"></ul>
      <p class="puzzle__hint">Hint: <span class="puzzle__question"></span></p>
      <p class="puzzle__mistake">Incorrect guesses: <span class="puzzle__counter-mistake"></span></p>
      <div class="keyboard" aria-label="keyboard">${generateKeyboard()}</div>
    </div>
  </div>
  `;
};
