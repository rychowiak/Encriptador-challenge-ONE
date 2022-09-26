const d = document;

const $input = d.getElementById("text-input");
const $output = d.getElementById("span-output");
const $copy = d.getElementById("copy-btn");
const $noText = d.getElementById("no-text-msg");
const $encrypt = d.getElementById("encrypt");
const $decrypt = d.getElementById("decrypt");

$copy.addEventListener("click", (e) => {
  navigator.clipboard.writeText($output.innerText).then(
    () => {
      window.alert("text copied to clipboard");
    },
    () => {
      window.alert("Sorry, your browser does not support Clipboard API");
    }
  );
});

$encrypt.addEventListener("click", (e) => {
  const inputText = $input.value.split("");
  // console.log(inputText);
  let salida = "";

  inputText.map((el) => {
    if (el === "e") {
      el = "enter";
    }
    if (el === "i") {
      el = "imes";
    }
    if (el === "a") {
      el = "ai";
    }
    if (el === "o") {
      el = "ober";
    }
    if (el === "u") {
      el = "ufat";
    }
    salida += el;
  });
  $output.innerText = salida;
  $noText.classList.add("is-active");
});
