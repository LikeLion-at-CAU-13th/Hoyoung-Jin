import axios from "axios";

export async function getQuizs() {
  const response = await axios.get(
    `https://week12-api-1cc7.onrender.com/api/questions`
  );
  const quizResponse = response.data;
  return quizResponse;
}

export async function postAnswer(answer) {
  const response = await axios.post(
    `https://week12-api-1cc7.onrender.com/api/answers`,
    answer
  );
  const answerData = response.data;
  return answerData;
}

export async function getScore(score) {
  const response = await axios.get(
    `https://week12-api-1cc7.onrender.com/api/result?score=${score}`
  );
  const resultScore = response.data;
  return resultScore;
}
