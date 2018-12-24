const closeButton = document.querySelector(".disclaimer-close");
const disclaimer = document.querySelector(".disclaimer");


closeButton.addEventListener("click", () => {
	disclaimer.style.display = "none";
});

window.onload = () => {
	setTimeout(() => {
		disclaimer.style.display = "none";
	}, 2500);
};