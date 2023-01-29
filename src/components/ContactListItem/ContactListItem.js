import styled from 'styled-components';

export const Item = styled.li`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;

    border: 1px dashed black;    
`;

export const DeleteButton = styled.button`
    font-size: 20px;
    width: 100px;
    transition: 250ms, background-color;
    :hover{
        background-color: lightblue;
    }
`;