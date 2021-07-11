const nameForm = document.querySelector(".js-name");
const nameInput = nameForm.querySelector("input");
const nameBtn = nameForm.querySelector("button");
const NAME_LS = localStorage.getItem("user");
function handleLogBtnClick(event) {
    localStorage.setItem("user", nameInput.value);
    nameInput.classList.add("hide");
    nameForm.innerHTML = "Hello! " + nameInput.value;
}
function greeting() {
    if (NAME_LS === null) {
        nameBtn.addEventListener("click", handleLogBtnClick);
    }
    else {
        nameInput.classList.add("hide");
        nameForm.innerHTML = "Hello! " + NAME_LS;
    }
}
greeting();
