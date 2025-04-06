//DOM.js로부터 DOM 가져오기
import DOM from "../DOM/DOM.js";

import { ICON_PATH } from "./icon.js";

//DOM으로부터 상속
class Button extends DOM {
    // 텍스트 받는걸 icon으로 수정
    constructor(className, iconName){
        //DOM의 생성자(constructor) 호출 &
        //tagName 자리에 button을 쓰겠다는 뜻
        super('button', "", className);

        if (iconName) {
            const icon = new Image(); // <img> 태그 메모리에만 생성
            icon.src = ICON_PATH[iconName] // 메모리에 생성
            this.node.appendChild(icon) // HTML에 실제 반영
        }
    }
}

//Button 내보내기
export default Button;