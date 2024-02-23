const editor = document.querySelector(".editor--js");
const saveButton = document.querySelector(".save--js");
const loadButton = document.querySelector(".load--js");
const checkButton = document.querySelector(".check--js");

saveButton.addEventListener("click", () => {
	localStorage.setItem("content", editor.value);
	console.log(`Zapisano wiadomość o treści "${editor.value}"`);
});

loadButton.addEventListener("click", () => {
	editor.value = localStorage.getItem("content");
});

checkButton.addEventListener("click", () => {
	const textLenght = editor.value.length;
	editor.classList.remove("text-gray-900", "dark:text-white");
	if (textLenght > 10) {
		editor.classList.add("text-green-600");
		editor.classList.remove("text-red-600");
	} else {
		editor.classList.add("text-red-600");
		editor.classList.remove("text-green-600");
	}
});
// load.addEventListener("click", () => {
// 	const navigation = document.querySelector(".header-nav__navigation--js");
// 	navigation.classList.toggle("navigation--open");
// });
