document
.getElementById("notify-button")
.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("popup-overlay").style.display = "flex";
});

document
.getElementById("popup-close")
.addEventListener("click", function () {
  document.getElementById("popup-overlay").style.display = "none";
});

document
.getElementById("popup-overlay")
.addEventListener("click", function (event) {
  if (event.target === this) {
    document.getElementById("popup-overlay").style.display = "none";
  }
});

document
.querySelector(".popup-content form")
.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for subscribing! 🤗");
  document.getElementById("popup-overlay").style.display = "none";
});