import { initialIssue } from "./js/initialIssue.js";
import { initialPage } from "./js/initialPage.js";

(async () => {
	const page = document.querySelector("body");
	page.innerHTML = await initialPage();

	initialIssue();
})();
