// DOM.js로부터 DOM 가져오기
import DOM from "./DOM.js";

// Dom으로부터 상속
class Div extends DOM {
    constructor(innerText, className) {
        // DOM 생성자(constructor) 호출,
        // tagName 부분에 div를 쓰겠다는 뜻
        super('div', innerText, className);
    }
}

export default Div;