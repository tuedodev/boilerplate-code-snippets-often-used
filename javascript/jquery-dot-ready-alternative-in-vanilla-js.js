// A vanilla JS alternative to jquery´s $(document).ready() function

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
