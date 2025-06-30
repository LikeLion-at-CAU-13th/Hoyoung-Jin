import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailAtom,
  isSubmittedAtom,
  userImgAtom,
  userNameAtom,
} from "../recoil/atom";
import { Button, ImgStyle, Title } from "../components/layout/common";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BtnStyleContext } from "../context/context";
import styled from "styled-components";

function Modal({ setModalOpen }) {
  const mode = useContext(BtnStyleContext);
  const navigate = useNavigate();

  const setItSubmmitted = useSetRecoilState(isSubmittedAtom);

  const img = useRecoilValue(userImgAtom);
  const name = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);

  const handleBtn = () => {
    setModalOpen(false);
    setItSubmmitted(true);
    navigate("/mypage");
    alert(`🎇${name}님 환영합니다!🎇`);
  };

  const handleMadal = () => {
    setModalOpen(false);
    alert(`취소되었습니다!`);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Title>⚠️입력한 정보가 맞으신가요?⚠️</Title>
        <ImgStyle>
          <img src={img} />
        </ImgStyle>
        <div>{`🕵️이름: ${name}`}</div>
        <div>{`✉️이메일: ${email}`}</div>

        <BtnStyle mode={mode.correctBtn} onClick={handleBtn}>
          확인
        </BtnStyle>

        <BtnStyle mode={mode.cancleBtn} onClick={handleMadal}>
          취소
        </BtnStyle>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

// 중앙으로 정렬하고 배경 깔기
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

// 콘텐츠 박스 색깔, 그림자 입히기
const ModalContent = styled.div`
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 500px;
  padding: 30px;
  border-radius: 20px;

  font-size: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: ${(props) => props.mode.color};
  background-color: ${(props) => props.mode.backgroundColor};
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.mode.hoverBackgroundColor};
    color: ${(props) => props.mode.hoverColor};
  }
`;
