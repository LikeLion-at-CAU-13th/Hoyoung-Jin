import React, { use, useState } from 'react';
import styled from 'styled-components'
import UserFilter from '../components/UserFilter';
import UserSection from '../components/UserSection';


// 최상단 컴포넌트임
const UserInfo = () => {
    const [filter, setFilter] = useState("all");
    const [curPage, setCurPage] = useState();
    const [userData, setUserData] = useState([]);
    const [totalData, setTotalData] = useState([]);


    return (
        <MainLayout>
            <h1>🦁13기 아기사자 리스트🦁</h1>
            <ContentBox>
                <UserFilter setFilter={setFilter} setUserData={setUserData} setCurPage={setCurPage} setTotalData={setTotalData}/>
                <UserSection filter={filter} userData={userData} curPage={curPage} totalData={totalData} setUserData={setUserData} setCurPage={setCurPage} setTotalData={setTotalData}/>
            </ContentBox>
        </MainLayout>
    );
};

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border : 5px solid #FF7710;
`


export default UserInfo;