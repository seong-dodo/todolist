const addBtn = document.querySelector('#add');
const ul = document.querySelector('#to-do-list');
const input = document.querySelector('#input');

//[할일추가]  branch명 "feature/할일등록"
//<input>태그에 할 일 입력하면 <li>태그 생성되고, <ul id="to-do-list">태그에 마지막 자식 노드로 추가하기
function addTodo() {
    const newTodo = input.value;
    if (newTodo) {
        const li = document.createElement('li');
        li.classList.add('todo');
        li.innerHTML = `<input value='${newTodo}' class="todo-input" readonly="true" ondblclick="this.readOnly='';"></input>`;
        ul.append(li);



        //[완료목록처리]  branch명 "feature/완료목록처리"
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checktodo');
        checkbox.addEventListener('click', function checkTodo(e) {
            if (e.target) {
                li.childNodes[1].classList.toggle('done');
            }
        });
        li.prepend(checkbox);

        //[할일수정] branch명 "feature/할일수정"
        console.log(li.childNodes[1])
        li.childNodes[1].addEventListener('dbclick', function todoModify(e) {
            console.log(e.target)
            e.target.readOnly = false;
        });

        //[할일삭제]  branch명 "feature/할일삭제"
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.classList.add('removebtn');
        li.append(removeBtn);
        removeBtn.addEventListener('click', function removeTodo(e) {
            li.remove(e.target);
        });
    } else {
        alert('내용을 입력하세요...');
    }

    input.value = '';

}

//<button>태그 클릭했을 때 할 일 추가 기능 만들기
addBtn.addEventListener('click', addTodo);


//<input>태그에 할 일 입력 후 엔터 누르면 할 일 추가 기능 만들기
function addTodoByEnter(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        addTodo();
        e.preventDefault();
    }
}

input.addEventListener('keypress', addTodoByEnter);



//[전체선택]  branch명 "feature/전체선택"
const oneBtn = document.createElement('input');
oneBtn.type = 'checkbox';
oneBtn.addEventListener('click', function total(e) {
    for (let i = 1; i < ul.childNodes.length; i++) {
        if (e.target.checked === false) {
            ul.childNodes[i].children[0].checked = false;
            ul.childNodes[i].childNodes[1].classList.remove('done');
        } else {
            ul.childNodes[i].children[0].checked = true;
            ul.childNodes[i].childNodes[1].classList.add('done');
        }

    }
});
ul.prepend(oneBtn);

