import { useState } from "react";

// 추천 따봉 버튼 넣기 State


const ContentId = {
  "WhyFE": GetSectionWhyFE, 
  "profile": GetSectionProfile, 
  "dream" : GetSectionDream, 
  "hobby" : GetSectionHobby,
};



// WhyFE section 가져오기
function GetSectionWhyFE () {
  let [good, ClickGood] = useState(0)
  return (
    <div>
    <h1>🕵️ Why Front-end? </h1>
    <p>친구 1명과 같이 개발을 하기로 약속했는데, 그 친구가 저에게 프론트엔드를 권하더군요.</p>
    <p>이것이 제가 프론트엔드를 공부하고 있는 가장 큰 이유입니다.</p>
    </div>
  );
}

// 프로필 section 가져오기
function GetSectionProfile() {
  return(
    <div>
    <h1>😎 프로필</h1>
    <ol>
      <li>중앙대학교 교육학과 3학년</li>
      <li>어쩌다보니 융합전공생</li>
      <li>취득 자격증: 일본어 2급, 한자 3급, ADSP, MOS Exel</li>
    </ol>
    </div>
  );
}


// 꿈 section 가져오기
function GetSectionDream() {
   return(
    <div>
    <h1>👨‍👩‍👧‍👦 꿈</h1>
    <ol>
      <li>경제적 자유 쟁취하기</li>
      <li>좋은 아빠가 되기</li>
      <li>IT 창업 해보기</li>
    </ol>
    </div>
   );
}

// 취미 section 가져오기
function GetSectionHobby() {
    return(
    <div>
    <h1>💕 취미</h1>
    <ol>
      <li>운동하기</li>
      <li>애니메이션 보기</li>
      <li>주식 투자하기</li>
    </ol>
    </div>
    );
}


// 위 함수 중 idName에 맞는 값 불러오기
function GetSectionContents ({idName}) {
  console.log({idName})
  const GetContents = ContentId[idName];
  console.log(GetContents);
  return <GetContents /> ;
}




export default GetSectionContents;