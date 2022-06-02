import styled from '@emotion/styled'

export const SearchingWrapper = styled.label`
font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 10px;
    margin-top: 10px;
    background-color: #57d9a6;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 35px;
`; 
export  const FilterField = styled.input`
    width: 80%;
    margin-top: 10px;
    border:none;    
    border-radius: 5px;
    outline: none;
    
`;

export const FilterHeader = styled.div`
    width: 100%;
    height: 25px;
    background-color: #b0b7bd;
    display:flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 10px;
`;
export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #587082;
    margin-right: 5px;
`;