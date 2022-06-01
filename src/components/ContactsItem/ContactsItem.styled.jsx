import styled from '@emotion/styled';


export const ContactItem = styled.li`
    width: 400px;
    margin-bottom: 10px;
    margin-left: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
export const ContactActionBtn = styled.button`
    cursor: pointer;
    padding: 5px;
    color: white;
    background-color: #e094dc;
    font-weight: 600;
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