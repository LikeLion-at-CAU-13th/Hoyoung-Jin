//authAxios.js 인터셉터 기능 활용

import axios from "axios";
import { getNewRefreshToken } from "./user";

export const getAuthAxios = (token) => {
  // 인스턴스 만들기
  const authAxios = axios.create({
    baseURL: "https://likelion-cau.r-e.kr",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //인터셉트. 리퀘스트 데이터를 받아오면 가장 먼저 실행
  authAxios.interceptors.response.use(
    (response) => response.data, // 응답이 잘 왔으면 받은 응답을 반환

    async (error) => {
      // 에러가 발생했을 때 아래 코드들을 실행
      // try {

      const result = await getNewRefreshToken();
      error.config.headers.Authorization = result.accessToken;
      // 오류가 발생한 요청을 했을 때, 헤더에 담아서 보낸 토큰을 새 토큰으로 변경
      // 새로운 access 토큰으로 헤더 변경
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      // 로컬 스토리지에 새로운 토큰 저장

      return (await axios.get(error.config.url, error.config)).data;
      //에러가 발생한 요청의 url을 그대로 가져와서 사용하고, 필요한 데이터들은
      //error.config 객체 내에 담겨있기 때문에 그대로 다시 가져와서 get 요청

      // } catch (error) {
      // 리프레쉬 에러 발생
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      alert("리프레쉬 토큰 만료, 다시 로그인해주세요.");
      return Promise.reject(error);
      // }
    }
  );
  return authAxios;
};
