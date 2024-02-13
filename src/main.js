const saveButton = document.querySelector(".save--js");
const loadButton = document.querySelector(".load--js");
const editor = document.querySelector(".editor--js");

saveButton.addEventListener("click", () => {
	localStorage.setItem("content", editor.value);
	console.log(`Zapisano wiadomość o treści "${editor.value}"`);
});

loadButton.addEventListener("click", () => {
	editor.value = localStorage.getItem("content");
});
// load.addEventListener("click", () => {
// 	const navigation = document.querySelector(".header-nav__navigation--js");
// 	navigation.classList.toggle("navigation--open");
// });
