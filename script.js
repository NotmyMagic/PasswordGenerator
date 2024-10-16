const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0,1,2,3,4,5,6,7,8,9";
const symbols = "!@#$%^&*()_+{};~?,./";
const generate = document.getElementById("generate");

generate.addEventListener("click", (e) => {
  e.preventDefault();
  generatePass();
});

function generatePass() {
  let length = parseInt(document.querySelector("#length").value);
  // let upperCheck = document.getElementById("capital:checked");
  // let numberCheck = document.getElementById("numbers:checked");
  // let symbolCheck = document.getElementById("symbols:checked");
  let password = "";
  let charSet = "";
  charSet += lower;
  // if (upperCheck === true) {
  //   charSet += upper;
  // }
  // if (numberCheck === true) {
  //   charSet += numbers;
  // }
  // if (symbolCheck === true) {
  //   charSet += symbols;
  // }
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  password = document.getElementById("password").value = password.slice(
    0,
    length
  );
  console.log(password);
}
