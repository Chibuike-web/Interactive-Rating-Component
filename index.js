let rating_value;
const rating = document.getElementById("rating");
const main_component = document.getElementById("main-component");
const submit_btn = document.getElementById("submit-btn");
const ratingOptions = document.querySelectorAll("#rating-value");
ratingOptions.forEach((option) => {
	option.addEventListener("click", (e) => {
		rating_value = e.target.textContent;
	});
});

submit_btn.addEventListener("click", (e) => {
	main_component.classList.add("hidden");
	rating.textContent = rating_value;
});
