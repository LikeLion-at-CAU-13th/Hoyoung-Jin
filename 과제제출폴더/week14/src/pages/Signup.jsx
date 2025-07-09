import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../apis/user";
import { useForm } from "../hooks/useForm";

const Signup = () => {
  const [id, setId] = useForm();
  const [pw, setPw] = useForm();
  const [name, setName] = useForm();
  const [age, setAge] = useForm();

  const navigate = useNavigate();

  const onClick = async () => {
    await signup(id, pw, name, age);
    alert("회원가입이 완료되었습니다!");
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <div>아이디</div>
        <input value={id} onChange={setId} />
        <div>비밀번호</div>
        <input value={pw} onChange={setPw} />
        <div>이름</div>
        <input value={name} onChange={setName} />
        <div>나이</div>
        <input type="number" value={age} onChange={setAge} />
      </Inputs>
      <button onClick={onClick}>가입하기</button>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  div {
    font-size: 14px;
    color: grey;
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;
