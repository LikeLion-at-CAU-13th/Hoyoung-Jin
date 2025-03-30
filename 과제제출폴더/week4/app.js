//1. js 파일에서 접근해야하는 html dom 요소 삽입
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")


//2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);


//3. displayMyChoice 함수 작성
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

//4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist change"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90 change"],
        2 : ["paper", "fa-regular fa-hand change"]
    };
    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

//5. 컴퓨터의 선택이 화면에 보이도록 함수
function displayComChoice (result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
    console.log(result[1]);
} 

//6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    // let comChoice = resultArray[0];
    displayComChoice(resultArray);
}