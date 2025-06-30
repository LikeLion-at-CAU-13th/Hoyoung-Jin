import React, { useContext } from "react";
import { Button, ImgStyle, Title, Wrapper } from "../components/layout/common";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  emailAtom,
  isSubmittedAtom,
  userImgAtom,
  userNameAtom,
} from "../recoil/atom";
import { ThemeColorContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const userImg = useRecoilValue(userImgAtom);
  const mode = useContext(ThemeColorContext);

  const navigate = useNavigate();
  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);
  const resetUserImg = useResetRecoilState(userImgAtom);

  const handleReset = () => {
    resetUserName();
    resetEmail();
    resetIsSubmitted();
    resetUserImg();
    navigate("/");
  };

  return (
    <Wrapper>
      <ImgStyle>
        <img src={userImg} />
      </ImgStyle>
      <Title>Welcom {userName}</Title>
      <Button mode={mode.button} onClick={handleReset}>
        Reset
      </Button>
    </Wrapper>
  );
};

export default MyPage;
