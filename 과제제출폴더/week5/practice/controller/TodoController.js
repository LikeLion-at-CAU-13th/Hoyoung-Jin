// Todo 가져오기
import Todo from "../DOM/Todo.js"
// 이미지 경로를 바꾸기 위해 가져옴
import { ICON_PATH } from "../DOM/icon.js";

// 가져온 Todo 활용하기
class TodoController {
    constructor(todoText) {
        //가져온 Todo로 새로운 할일 만들기
        this.newTodo = new Todo(todoText);

        // 바로 위에서 만들어진 newTodo에 삭제,완료 버튼 추가 + 텍스트 넣어주기
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        // 만들어진 newtodo 삭제, 완료 버튼에 클릭 이벤트 넣어주기
        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })

        // 이것 전체를 지정해줄 필요가 있음. 왔다갔다 해야하니까. getrow()를 쓰면 되겠네.
        this.selectRow = this.newTodo.getRow(); // 근데 이렇게하면 위에 추가된 값들이 반영이 잘 되나?
    }

    // 새로운 할 일을 "to-do-list"의 자식요소 마지막 단에 추가하고  입력창을 비워주기
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');

        // 입력에 아무것도 없으면 추가 안되게 설정
        if (input.value.length > 0) {
            todoList.appendChild(this.newTodo.addRow());
            input.value = '';
        }
    }

    // to-do-list에 있는 자식요소(newTask)를 삭제하기
    // complete-list에 있는 자식 요소도 삭제할 수 있어야함.
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        const CompleteList = document.getElementById("complete-list")

        // done-btn 스타일을 가지고 있을경우 remove
        if(this.comBtnNode.classList.contains('done-btn')) {
            CompleteList.removeChild(this.newTodo.getRow());
        } else {
            todoList.removeChild(this.newTodo.getRow());
        }

       
    }
    
    //css의 done-text를 텍스트에 추가 => 취소선 그어짐
    //css의 done-btn을 버튼에 추가 => 완료 누르면 미완, 미완 누르면 완료
    
    doneTodo(){
        // to-do-list와 complete-list id가져오기
        const CompleteList = document.getElementById("complete-list")
        const todoList = document.getElementById("to-do-list");
        //HTML의 img class에 접근하기 - 이미 
        const img = document.querySelector('img')
        
        if(this.comBtnNode.classList.contains('done-btn')) {
            //이미지 경로 조정
            img.src = ICON_PATH.check
            // 버튼에 CSS값 초기화해주기
            this.innerNode.classList.remove('done-text');
            this.comBtnNode.classList.remove('done-btn');
            // To-Do List로 돌아오는 코드
            todoList.append(this.newTodo.getRow())

        } else {
            // 이미지 경로 조정
            img.src = ICON_PATH.back
            // Complete List로 이동하는 코드
            CompleteList.append(this.newTodo.getRow())
            //텍스트에 취소선 그어주기 + 버튼에 어두운 색 추가해주기
            this.innerNode.classList.add('done-text');
            this.comBtnNode.classList.add('done-btn');
        }
        
    }
}

// 다른 js파일들과 호환되도록 exprot
export default TodoController