import styled from '@emotion/styled';


export const ContactItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
`;
export const ContactActionBtn = styled.button`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
    padding: 5px;
    color: white;
    background-color: #e094dc;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #df29af;
        
        color: #000;
    };
    &:active {
        transform: scale(0.9)
    }

`;
export const ContactNumber = styled.span`
width: 150px;

`;
export const ContactName = styled.span`
width: 150px;
`;