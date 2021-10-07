//DOM
const ul = document.getElementById("js-ul");
const form = document.getElementById("js-form");
const input = document.getElementById("js-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    console.log(value);
    add();
});

function add() {
    let inputValue = input.value;
    //空文字は許さない
    if (inputValue) {
        const li = document.createElement("li");
        li.innerText = inputValue;
        li.classList.add("top__container-list");
        ul.appendChild(li);
    }
}
