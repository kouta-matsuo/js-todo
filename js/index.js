//DOM
const ul = document.getElementById("js-ul");
const form = document.getElementById("js-form");
const input = document.getElementById("js-input");

//フォームが送信されたら
form.addEventListener("submit", (e) => {
    e.preventDefault();//再読み込みさせない
    add();
});
//関数
function add() {
    let inputValue = input.value;
    //空文字は許さない
    if (inputValue) {
        const li = document.createElement("li");
        li.innerText = inputValue;
        li.classList.add("top__container-list");
        ul.appendChild(li);
        
        //クリックしたら完了させる
        li.addEventListener("click", () => {
        li.classList.toggle("top__container-list--click");
});
    }
}


