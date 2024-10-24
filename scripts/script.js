const easterEgg = document.getElementById("easter-egg");
const closeEasterEgg = document.getElementById("close-easter-egg");

let keySequence = [];
const secretCode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];

document.addEventListener("keydown", (event) => {
	keySequence.push(event.key);

	if (keySequence.join(",").includes(secretCode.join(","))) {
		showEasterEgg();
		keySequence = [];
	}

	if (keySequence.length > secretCode.length) {
		keySequence.shift();
	}
});

function showEasterEgg() {
	easterEgg.removeAttribute("hidden");
	easterEgg.classList.add("show");
}

closeEasterEgg.addEventListener("click", () => {
	easterEgg.setAttribute("hidden", true);
	easterEgg.classList.remove("show");
});
