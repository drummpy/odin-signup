const pwordone = document.getElementById("password");
const pwordtwo = document.getElementById("password2");
const errormsg = document.getElementById("error");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (pwordone.value != pwordtwo.value) {
    errormsg.textContent = "* Passwords do not match";
    pwordone.style.cssText = "border: 1px solid red; outline: red;";
    pwordtwo.style.cssText = "border: 1px solid red; outline: red;";
    console.log("Error");
    console.log(pwordone.value + pwordtwo.value);
  } else {
    errormsg.textContent = "";
    pwordone.style.cssText = "1px solid #d6d9dc; outline: #69d9dc;";
    pwordtwo.style.cssText = "1px solid #d6d9dc; outline: #69d9dc;";
    console.log("Error");
    console.log("No error");
    console.log(pwordone.value + pwordtwo.value);
  }
});
