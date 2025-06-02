import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';


//이건 건들지 말자
//userdata는 5개 값 전체를 의미함.
// 여기 데이터를 보내줘야함
const UserSection = ({filter, userData, curPage, setUserData, setCurPage, totalData}) => {
    return (
        <UserSecLayout>
            <UserCardBox>
                {userData.map((data, idx) => <UserCard key={idx} data={data}/>)}
            </UserCardBox>
            {filter === "all" && <PageSelection curPage={curPage} setCurPage={setCurPage} setUserData={setUserData}  totalData={totalData}/>}
        </UserSecLayout>
    );
};

export default UserSection;


const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`