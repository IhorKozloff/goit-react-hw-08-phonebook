import styled from '@emotion/styled'
import { Field, Form } from 'formik'



export const InputStyled = styled(Field)`
    border: none;
    border-radius: 5px;
    outline: none;
    height: 20px;
    
`;
export const DataForm = styled(Form)`
    box-sizing: border-box;
    border: 1px solid white;
    width: 230px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 45px;
    bottom: 160px;

`;

export const InputWrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    color: #FFF;
    width: 100%

`;
export const AddContactBtn = styled.button`
    border-radius: 5px;
    width: 70%;
    background-color: #e094dc;
    cursor: pointer;
    height: 30px;
    margin-top: 10px; 
    font-weight: 600;
    border: none;
    &:hover {
        background-color: #df29af;
    };
    &:active {
        transform: scale(0.9)
    }
`;



