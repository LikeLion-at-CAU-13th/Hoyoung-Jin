// HTML 테그를 생성해주는 파일

//HMTL 태그를 생성
class DOM {
    // 변수 생성
    constructor(tagName, innerText, className) {
        // tagName라는 이름의 요소노드 만들고 DOM 트리에 추가될 준비 하기
        // 이때 this.node는 만들어진 요소노드를 지칭함
        this.node = document.createElement(tagName);
        // 만들어진 객체의 innerText = 파라미터로 받은 innerText
        this.node.innerText = innerText;
        // css스타일 씌우기 파라미터로 받은 className이 css에 있으면 가져오기
        if (className) this.node.classList.add(className);
    }
}

export default DOM