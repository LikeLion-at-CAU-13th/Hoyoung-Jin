import React from 'react';
import styled from 'styled-components';
import { getPerPage } from '../apis/userlist';

// fetch말고 그냥 totalData slice로 자른거 들고오기
const PageSelection = ({curPage, setCurPage, setUserData, totalData}) => {
    // 만약 offset 변수를 동적으로 구현한다면 userInfo에서 useState 변수로 만들고 이를 props로 내려줘야할 것 같음 
    const offset = 5 
    const handleClick = (page) => {
        const startArrayIndex = (page - 1) * offset;
        console.log(totalData);
        console.log(startArrayIndex);
        
        const pageData = totalData.slice(startArrayIndex, startArrayIndex + offset);

        setUserData(pageData);
        setCurPage(page);
    }
    return (
        <SelectionLayout>
            {[1,2,3,4,5,6].map((val) => 
                <PageBox
                key={val}
                $active={val===curPage ? true:false}
                onClick={() => handleClick(val)}>
                    {val}
                </PageBox>
            )}
        </SelectionLayout>
    );
};




const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`
export default PageSelection;