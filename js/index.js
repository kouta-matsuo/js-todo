//DOM
const ul = document.getElementById("js-ul");
const form = document.getElementById("js-form");
const input = document.getElementById("js-input");
const todos = JSON.parse(localStorage.getItem('todos')); //ローカルストレージに入っている値を取り出す。

//todosに値が入っている場合一つずつ取り出す。
if (todos) {
    todos.forEach(todo => {
        add(todo);
    })
}


//フォームが送信されたら
form.addEventListener("submit", (e) => {
    e.preventDefault(); //再読み込みさせない
    add();
});
//関数
function add(todo) {
    let inputValue = input.value;

    if (todo) {
        inputValue = todo.text;
    }

    //空文字は許さない
    if (inputValue) {
        const li = document.createElement("li");
        li.innerText = inputValue;
        li.classList.add("top__container-list");
        ul.appendChild(li);
        input.value = '';
        saveData();

        //削除ボタン
        const btn = document.createElement("div");
        btn.classList.add("top__container-list-delete-btn");
        li.appendChild(btn);

        //削除ボタンをクリックしたら削除する
        btn.addEventListener("click", () => {
            li.remove();
            saveData();
        });

        //クリックしたら完了させる
        li.addEventListener("click", () => {
            li.classList.toggle("top__container-list--click");
            saveData();
        });

        //更新されても完了された状態を維持する
        if (todo && todo.copleted) {
            li.classList.add("top__container-list--click");
            saveData();
        }
    }
}

//liに入っている値をローカルストレージに入れる。
function saveData() {
    const lists = document.querySelectorAll('li');
    let todos = [];
    lists.forEach(list => {
        let todolist = {
            text: list.innerText,
            copleted: list.classList.contains("top__container-list--click")
        };　
        todos.push(todolist);//todolistの値をtodosの配列に入れる
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
