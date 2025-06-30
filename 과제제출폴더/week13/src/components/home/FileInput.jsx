import { useSetRecoilState } from "recoil";
import { userImgAtom } from "../../recoil/atom";
import { useEffect, useState } from "react";
import kapibara from "../../image/image.js";
import { ImgStyle, Title } from "../layout/common.js";

function FileInput() {
  // 전역변수 설정
  const setImg = useSetRecoilState(userImgAtom);

  // 파일 객체 관리 state
  const [value, setValue] = useState(null);
  // 이미지 파일 경로 관리  state
  const [preview, setPreview] = useState(null);

  // 파일 객체 핸들러
  const handleChange = (e) => {
    const fileObject = e.target.files[0];
    setValue(fileObject);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    setImg(nextPreview);
  }, [value]);

  return (
    <>
      <Title>🔽사진을 업로드 해주세요!🔽</Title>
      <ImgStyle>
        <img src={preview || kapibara} alt="미리보기" />
      </ImgStyle>
      <input type="file" onChange={handleChange} />
    </>
  );
}

export default FileInput;
