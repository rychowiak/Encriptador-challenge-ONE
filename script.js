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
      d.querySelector(".text-copied").innerText = "Texto copiado!";
      setTimeout(() => {
        d.querySelector(".text-copied").innerText = "";
      }, 1000);
    },
    () => {
      window.alert("Sorry, your browser does not support Clipboard API");
    }
  );
});

$encrypt.addEventListener("click", (e) => {
  const inputText = $input.value.toLowerCase().split("");
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

$decrypt.addEventListener("click", (e) => {
  let encryptedText = $input.value.toLowerCase();
  const mapObj = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  $output.innerText = decryptText(encryptedText, mapObj);
  $noText.classList.add("is-active");
});

/* Function applies the replace method to the provided text and search for encrypted words and replace them with the original letter */
function decryptText(text, mapObj) {
  const reg = new RegExp(Object.keys(mapObj).join("|"), "g");
  let result = text.replace(reg, (matched) => mapObj[matched]);
  return result;
}
