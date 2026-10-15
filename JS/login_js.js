const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(event) {
	event.preventDefault();

	const email = emailInput.value.trim();
	const password = passwordInput.value;
	const emailRegex = /^[a-z]+\.[a-z]+(?:\d{2})?@e-uvt\.ro$/i;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

	if(!emailRegex.test(email)) {
		alert("Introdu o adresă UVT validă: prenume.nume@e-uvt.ro sau prenume.nume12@e-uvt.ro.");
		return;
	}

	if(!passwordRegex.test(password)) {
		alert("Parola trebuie să conțină cel puțin 7 caractere, inclusiv o literă mare, o literă mică, o cifră și un caracter special.");
		return;
	}

	alert("Login reușit!");
	window.location.href = "home.html";
});
