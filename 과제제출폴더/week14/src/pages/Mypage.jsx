import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMyPage } from "../apis/user";
import { Navigate, useNavigate } from "react-router-dom";

//401 에러가 뜨면 리프레쉬 토큰으로 엑세스 토큰 재발급 받기

const Mypage = () => {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(localStorage.getItem("refresh"));
  const [access, setAccess] = useState(localStorage.getItem("access"));

  // 심심해서 만들어봤습니다.
  const [굿, set굿] = useState(0);

  // 네트워크 리퀘스트 로딩 처리
  const [loading, setLodaing] = useState(true);

  const navigate = useNavigate();

  const handle굿 = () => {
    set굿(굿 + 1);
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    alert("로그아웃 완료.");
    navigate("/");
  };

  useEffect(() => {
    getMyPage(access)
      .then((data) => {
        setData(data); // 데이터 받고
        setLoading(false); // set
        if (!refresh) {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          throw new Error("리프레쉬 토큰 만료");
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
        alert("토큰 기한 만료");
      });
  }, [access, refresh]);

  if (loading) return <div>로딩중...</div>; // 데이터 받아올동안 화면에 로딩표시 해주기

  return (
    <Wrapper>
      <Title>
        마이페이지<Span onClick={handle굿}>👍🏼{굿}</Span>
      </Title>
      <div>이름: {data.name}</div>
      <div>나이 : {data.age}</div>
      <button onClick={handleLogout}>로그아웃</button>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  gap: 10px;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
  button {
    width: 150px;
    height: 60px;
    font-size: 25px;
    color: white;
    background-color: #f87171;
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
    font-weight: 500;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #5d4037;
      color: #b8edfb;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Span = styled.span`
  padding: 10px;
  cursor: pointer;
`;
