//DOM.js로부터 DOM 가져오기
import DOM from "./DOM.js";

//DOM으로부터 상속
class Button extends DOM {
    constructor(innerText, className){
        //DOM의 생성자(constructor) 호출 &
        //tagName 자리에 button을 쓰겠다는 뜻
        super('button', innerText, className)
    }
}

//Button 내보내기
export default Button;