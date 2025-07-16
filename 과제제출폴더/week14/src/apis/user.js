import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `https://likelion-cau.r-e.kr`;

export const signup = async (id, pw, name, age) => {
  const result = await axios.post(`${baseURL}/accounts/signup/`, {
    id,
    pw,
    name,
    age,
  });
  return result;
};

export const login = async (id, pw) => {
  const result = await axios.post(`${baseURL}/accounts/login/`, {
    id,
    pw,
  });
  return result.data;
};

export const getMyPage = async (token) => {
  const authAxios = getAuthAxios(token);
  const result = authAxios.get("/accounts/mypage");
  return result;
};

//리프레쉬 토큰 API
export const getNewRefreshToken = async () => {
  try {
    //로컬 스토리지에서 access 토근과 refresh 토큰 가져오기
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    const result = await axios.post(
      // refresh 주소로 post 요청
      `${baseURL}/accounts/refresh`,
      {
        // 리프레쉬 토큰 보내기
        refreshToken,
      },
      {
        headers: {
          //헤더에 갱신할 access 토큰 넣어 보내기
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    alert("토큰이 만료되었습니다. 다시 로그인해주세요");
  }
};
