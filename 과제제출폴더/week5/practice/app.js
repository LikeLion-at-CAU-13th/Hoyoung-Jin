//Todocontroller로부터 생긴 객체들(인스턴스) 넘겨받기
import TodoController from "./controller/TodoController.js";

// 인풋 버튼과 박스 id, class 넘겨받기
const addBtn = document.getElementById('input-button')
const input = document.querySelector('input');

// 가져온 todocontroller 인스턴스에 input 값 넘겨주고 이벤트 추가해주기(클릭 시 todoController의 addTodo 함수 실행)
addBtn.addEventListener('click', () =>{
    const todoController = new TodoController(input.value);
    todoController.addTodo(); // 실제로 HTML에 추가해주기
})


//CompleteController로부터 생긴 객체들(인스턴스) 넘겨받기

// 