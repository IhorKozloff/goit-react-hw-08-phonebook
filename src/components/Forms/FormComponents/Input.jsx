import {InputWrapper, InputStyled } from "components/Forms/FormComponents/Input.styled";


export const Input = ({children, type}) => {


    return (
        <InputWrapper htmlFor={`${children.toLowerCase()}`}>
            {children}
            <InputStyled
                type={type}
                name={`${children.toLowerCase()}`}
            />
        </InputWrapper>
    )
}