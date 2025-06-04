import React, { useState } from 'react';
import styled from 'styled-components';
import { filterType } from '../constants/filterType';
import { getGenderUser, getPerPage, getPartUser } from '../apis/userlist';



const UserFilter = ({setFilter, setUserData, setCurPage, setTotalData}) => {

    const [indexOn, setIndexOn] = useState(0);
    const offset = 5;

    const handleClick = async(type, param, idx) => {
        

        if(type === "all"){
            const response = await getPerPage(0);
            console.log(response);

            // 전체 데이터를 저장 => pageSelection 까지 넘겨줄거임
            setTotalData(response);

            const firstPageData = response.slice(0, offset);
            
            // 첫 번째 페이지 표시
            setUserData(firstPageData);
            setCurPage(1)


        } else if (type === "gender") {
            const response = await getGenderUser(param);
            console.log(response);
            setUserData(response);
            setCurPage(1);
        }
        else if (type === "part") {
            const response = await getPartUser(param);
            console.log(response);
            setUserData(response);
            setCurPage(1);
        }


        setFilter(param);
        setIndexOn(idx);
    }

    // 필터 만들기
    // 필터 타입에 접근하여 key에 인덱스 넣어주고, 핸들클릭 함수에 아규먼트로 데이터의 타입과 파람 넣어주기, 그리고 필터 이름은 title로 해주기
    return (
        <FilterLayout>
            {filterType.map((data, idx) =>
            <FilterBox key={idx} 
            onClick={() => handleClick(data.type, data.param, idx)}
            $active = {indexOn === idx}
            > 
                {data.title}
            </FilterBox>
            )}
        </FilterLayout>
    );
};

export default UserFilter;


const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    color : ${(props) => props.$active ? "#C9C9C9" : "#000000"};
    transition: all 0.2s ease;
    &:hover{
        cursor: pointer;
        color: white;
    }
`


// if(type === "all"){
//             const response = await getPerPage(1);
//             console.log(response);
//             setUserData(response);
//             setCurPage(1);