var link = document.querySelector(".feedback__btn");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");


// ADD CLASS

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

// DELETE CLASS ON click

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

// CHECK ESCAPE TO CLOSE WINDOW

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
