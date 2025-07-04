import React, { useContext, useState } from "react";
import Form from "./Form";
import { Button, Wrapper } from "../layout/common";
import { ThemeColorContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isSubmittedAtom } from "../../recoil/atom";
import FileInput from "./FileInput";
import Modal from "../../pages/Modal";

const FormSection = () => {
  const mode = useContext(ThemeColorContext);

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <FileInput type="file" inputType="본인 사진" />
      <Form type="home" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Button mode={mode.button} onClick={() => handleChange()}>
        제출
      </Button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </Wrapper>
  );
};

export default FormSection;
