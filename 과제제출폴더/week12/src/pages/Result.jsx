import styled from "styled-components";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getScore } from "../api";

const Result = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const location = useLocation();
  //옵셔널체인닝 사용
  const result = location.state?.quizResult;
  console.log(result);

  //홈으로 이동
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const gradingScore = async (resultArray) => {
    const correctAnswers = resultArray.filter((item) => item.correct === true);
    const scoreData = await getScore(correctAnswers.length);
    const score = scoreData.score;
    setScore(`총점: ${score}/5 점입니다! 굿굿!`);
    const scoreMessage = scoreData.message;
    setMessage(scoreMessage);

    return score, scoreMessage;
  };

  useEffect(() => {
    //옵셔널체인닝 사용
    const resultArray = location.state?.quizResult?.results;
    gradingScore(resultArray);
  }, []);

  return (
    <MenuDom>
      <Title onClick={goHome}>🏠재도전하러 가기!🏠</Title>
      <Title>채점 결과 공개😎</Title>
      <FalseStyle>
        {score}
        <br />
        {message}
      </FalseStyle>
    </MenuDom>
  );
};

export default Result;

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
`;

const QuestionText = styled.div`
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 20px 0;
  line-height: 1.4;
`;

const FalseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  font-size: 30px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
`;
