import styled from '@emotion/styled'
import { Field } from 'formik'


export const InputStyled = styled(Field)`
    color: red;
    border: none;
    border-bottom: 1px solid black;
    outline:none;
`;

export const InputWrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;


`;