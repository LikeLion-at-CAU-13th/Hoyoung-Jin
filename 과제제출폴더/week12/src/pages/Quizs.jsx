import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getQuizs, postAnswer } from "../api";

const Quizs = () => {
  const [quizs, setQuizs] = useState([]);
  const [pickAnswer, setPickAnswer] = useState({});
  const [toggle, setToggle] = useState(false);
  const [selectNum, setSelectNum] = useState(1); // 이게 5가 되면 제출하기 버튼이 열림
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  // 초기 렌더링 값 불러오기
  const handleLoad = async () => {
    const quizData = await getQuizs();
    console.log(quizData);
    setQuizs(quizData);
  };

  //초기 화면 렌더링
  useEffect(() => {
    handleLoad();
  }, []);

  // 사용자가 선택한 값 모아두기 (POST 용) id와 answer 받기
  // 객체 반환
  const handlePickAnswer = (quizId, answer) => {
    //객체 반환해야하니까 소괄호로 한번 감싸주기
    setPickAnswer((preAnswer) => ({
      ...preAnswer,
      // 계산된 속성명 사용
      [quizId]: answer,
    }));
    console.log(pickAnswer);
    setSelectNum(selectNum + 1); // selectNum 하나 올려주기
    selectNum === 5 && setToggle(true);
  };

  // 사용자가 선택한 값 POST 해서 채점하기
  const handleSubmit = async () => {
    //Obect.entries로 객체를 받고, destructuring 문법으로 map이 각 배열을 순회할때의 배열 값을 분해.
    const innerPostObject = Object.entries(pickAnswer).map(
      ([quizId, answer]) => ({
        id: Number(quizId),
        answer: answer,
        // 함수에 소괄호를 한번더 써줌으로써 객체 자체를 반환
      })
    );

    const finalPostObject = {
      answers: innerPostObject,
    };

    const gradingData = await postAnswer(finalPostObject);
    console.log(gradingData);
    navigate("/result", { state: { quizResult: gradingData } });
  };

  return (
    <MenuDom>
      <Title onClick={goHome}>🏠메인 페이지로🏠</Title>
      <Title>🕵️Quiz List🕵️</Title>
      <QuizContainer>
        {quizs.map((quiz) => {
          return (
            <QuizContainer>
              <div key={quiz.id}>
                <QuestionText>
                  {`${quiz.id + 1}) `}
                  {quiz.question}
                </QuestionText>
                <OptionsContainer>
                  {quiz.answers.map((answer, index) => {
                    return (
                      <OptionBtn
                        key={index}
                        onClick={() => handlePickAnswer(quiz.id, answer)}
                        checkSelected={pickAnswer[quiz.id] === answer}
                      >
                        {`${index + 1}. `}
                        {answer}
                      </OptionBtn>
                    );
                  })}
                </OptionsContainer>
              </div>
            </QuizContainer>
          );
        })}
      </QuizContainer>
      {toggle ? (
        <StyledBtn to="/result" onClick={() => handleSubmit()}>
          ☑️제출하기☑️
        </StyledBtn>
      ) : (
        <FalseStyle>5문제를 모두 풀어주세요!</FalseStyle>
      )}
    </MenuDom>
  );
};

export default Quizs;

// CSS
const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
  cursor: pointer;
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #434190;
    color: #b8edfb;
  }
`;

const FalseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
`;

// 출처: canva 4지선다 퀴즈 CSS

// 퀴즈 레이아웃
const QuizContainer = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 600px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

// 질문 텍스트 스타일
const QuestionText = styled.div`
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 20px 0;
  line-height: 1.4;
`;

// 선택지(버튼) 컨테이너
const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

// 선택지 버튼 기본 스타일
// styled.button으로 수정
// props 받아서 반응형 처리만들어버리기
const OptionBtn = styled.button`
  width: 90%;
  padding: 15px 20px;
  background-color: ${(props) => (props.checkSelected ? "#5a67d8" : "#f7fafc")};
  border: 2px solid ${(props) => (props.checkSelected ? "#5a67d8" : "#e2e8f0")};
  border-radius: 10px;

  font-size: 1rem;
  color: ${(props) => (props.checkSelected ? "#ffffff" : "#2d3748")};
  text-align: left;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
