var feedbackButton = document.querySelector(".footer-contacts .button");
var closeButton = document.querySelector(".modal-close");
var popup = document.querySelector(".modal-write-us");
var nameField = popup.querySelector("[name=name]");
var slides = Array.prototype.slice.call(document.querySelectorAll(".features-item"));
var slideButtons = Array.prototype.slice.call(document.querySelectorAll(".slider-button"));

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    nameField.focus();
});

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
});

slideButtons.forEach(function (button) {
    button.addEventListener("click", changeSlide);
});

function changeSlide(evt) {
    evt.preventDefault();
    var currentElement = evt.target;
    var slideIndex = slideButtons.indexOf(currentElement);
    if (!currentElement.classList.contains("active")) {
        slideButtons.forEach(function (button) {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
            }
        })
        currentElement.classList.add("active");

        slides.forEach(function (slide) {
            if (slide.classList.contains("active")) {
                slide.classList.remove("active");
            }
        });
        slides[slideIndex].classList.add("active");
    }
}
