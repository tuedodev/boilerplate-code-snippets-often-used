function ready(fun) {
	if (document.readyState != `loading`) {
		fun();
	} else {
		document.addEventListener(`DOMContentLoaded`, fun);
	}
}

ready(() => {
	const init = () => {
		// Here comes the code
	};

	init();
});
