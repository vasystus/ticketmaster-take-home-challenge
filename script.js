function openContactForm() {
  document.getElementById("open").style.display = "block";
}

function closeContactForm() {
  document.getElementById("open").style.display = "none";
}

let form = document.querySelector("form");
form.addEventListener("submit",(e) => {
e.preventDefault();
alert("Thank you for being awesome! Form submitted.");
});
