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
  comChoice = start(clickedBtn);

  //displayResult 함수 호출
  displayResult(clickedBtn, comChoice);
  //scoreCheck 함수 호출
  scoreCheck(WLResult.innerText)
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
    let comChoice = resultArray[0];
    displayComChoice(resultArray);
    
    //comChoice return하기
    return comChoice
}


//1. Win/Lose 만들기

//Win-lose-result id 호출
const WLResult = document.getElementById("win-lose-result")

//Win-lose-result 함수 작성
function displayResult(clickedBtn, comChoice) {
  if (clickedBtn !== comChoice) {
    // clikedBtn이 바위 일때
    if (clickedBtn === "rock" && comChoice === "paper") {
      return WLResult.innerText ="Lose";
    } 
    else if (clickedBtn === "rock" && comChoice === "scissors") {
      return  WLResult.innerText ="Win";
    }

    // clikedBtn이 가위 일때
    else if (clickedBtn === "scissors" && comChoice === "paper") {
      return  WLResult.innerText ="Win";
    }
    else if (clickedBtn === "scissors" && comChoice === "rock") {
      return  WLResult.innerText ="Lose";
    }
    
    // clickedBtn이 보 일때
    else if (clickedBtn === "paper" && comChoice === "rock") {
      return  WLResult.innerText ="Win";
    } 
    else if (clickedBtn === "paper" && comChoice === "scissors") {
      return  WLResult.innerText ="Lose";
    }
  }
  // 비겼을때 Draw 출력하기
  else {
    return WLResult.innerText = "Draw"
  }
}


//2. Score 점수 표기하기

// myScore, comScore class 호출
const myScore = document.getElementsByClassName("score my-score")[0]
const comScore = document.getElementsByClassName("score computer-score")[0]

// myScore, comScore 기본값 표기
myScore.innerText = 0
comScore.innerText = 0

//scorecheck 함수 작성
function scoreCheck (result) {
  if (result === "Draw") {
    return ;
  }
  else if (result === "Win") {
    myScore.innerText ++
  }
  else if (result === "Lose") {
    comScore.innerText ++
  }
}

//3. reset 버튼 활성화하기

//reset 버튼 id 호출 
const reset = document.getElementById("reset-button")

// reset 버튼 클릭 이벤트 설정
reset.addEventListener("click", getReset)

//getReset 함수 작성
function getReset () {
  myScore.innerText = 0; // 내 점수를 0으로
  comScore.innerText = 0; // 컴퓨터 점수를 0으로
  myHandText.innerText = null; 
  myHandIcon.className = null;
  computerText.innerText = null;
  computerIcon.className = null;
  WLResult.innerText = null; // Win-lose-draw 초기화
  document.documentElement.style.filter = "invert(0%) hue-rotate(0deg)";
  return cIBtn.innerText = "Dark"
}

//4. 다크모드, 라이트 모드 구현하기

// 버튼 id값가져오기
const cIBtn = document.getElementById("color-inversion-button")

// 이벤트 구현하기
cIBtn.addEventListener("click", colorInversion)


// colorInversion 함수 구현하기
function colorInversion () {
  // 다크로모드로 반전
  if (cIBtn.innerText === "Dark") {
    document.documentElement.style.filter = "invert(100%) hue-rotate(180deg)";

    return cIBtn.innerText = "Light"
  }
  // 라이트모드로 반전
  else if (cIBtn.innerText === "Light") {
    document.documentElement.style.filter = "invert(0%) hue-rotate(0deg)";

    return cIBtn.innerText = "Dark"
  }
}
