var numberOfBoxes = document.querySelector(".number-box");
var counter = 0;
console.log(numberOfBoxes.value);
var createBoxBtn = document.querySelector(".create-box");

numberOfBoxes.addEventListener("focus", function () {});

createBoxBtn.addEventListener("click", function (e) {
  createBoxes();
  numberOfBoxes.value = "";
  if (prentBoxes.textContent !== "") {
    createBoxBtn.setAttribute("disabled", "true");
    createBoxBtn.style.cursor = "not-allowed"
  }
});

var prentBoxes = document.querySelector(".parent-boxes");
function createBoxes() {
  for (var i = 0; i < numberOfBoxes.value; i++) {
    var box = document.createElement("div");
    box.classList.add("box-style");
    prentBoxes.append(box);
  }
  addTextRandom();
  cheackGift();
}

function addTextRandom() {
  var randomBox = Math.floor(Math.random() * (numberOfBoxes.value - 0) + 1);
  document.querySelectorAll(".box-style").forEach((item, index) => {
    if (randomBox === index + 1) {
      var giftHeading = document.createElement("h6");
      giftHeading.classList.add("heading-style");
      var giftText = document.createTextNode("gift");
      giftHeading.appendChild(giftText);
      item.appendChild(giftHeading);
    }
  });
}

var alertMessage = document.querySelector(".alert");
alertMessage.style.opacity = "0";

function cheackGift() {
  document.querySelectorAll(".box-style").forEach((item, index) => {
    item.addEventListener("click", function () {
      counter++;
      if (item.textContent === "gift") {
        document.querySelector(".heading-style").style.opacity = 1;
        alertMessage.textContent = "you have win in " + counter + " times";
        alertMessage.style.opacity = "1";
        setTimeout(function () {
          alertMessage.style.opacity = "0";
          createBoxBtn.removeAttribute("disabled");
          prentBoxes.innerHTML = "";
          createBoxBtn.style.cursor = "pointer"
        }, 3500);
        counter = 0;
      }
    });
  });
}

