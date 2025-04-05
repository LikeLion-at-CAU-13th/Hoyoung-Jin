import Button from "./Button.js"; //Button.js의 Button 호출
import Div from "./Div.js"; //Div.js이 Div 호출

class Todo { // Todo 객체 만들기
    //생성자 호출
    constructor(todoText) {
        // this.row에 Div의 속성(.node) <div class="row"></div>라는 실제 값 저장, 그러니까 HTML의 요소를 저장한 것
        this.row = new Div('', 'row').node;
        // this.innerText에 Div class 인스턴스 저장
        this.innerText = new Div (todoText, 'text-box');

        //변수에 Button class 인스턴스 저장
        this.completeBtn = new Button('완료', 'complete-btn')
        //변수에 Button class 인스턴스 저장
        this.delBtn = new Button('삭제', 'del-btn')



    }
//만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
// 이 부분을 좀 손봐야할 것 같은데... 아닌가...
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node)
        });
    return this.row; //DOM에 추가할 수 있도록 return
    }

//각 요소의 gtter 메서드들
    getRow() {
    return this.row //row return
    }

    // 객체 completeBtn에 있는 node, 그니까 completeBtndml 속성 값인 <button class="complete-btn">완료</button>를  return
    getCompleteBtn(){ 
    return this.completeBtn.node; 
    }

    // 객체 delBtn의 node의 value값을 return
    getDelBtn() {
    return this.delBtn.node;
    }

    // 객체 innerText의 속성값인 node의 value값을 return
    getInnerText() {
    return this.innerText.node;
    }
}

export default Todo;