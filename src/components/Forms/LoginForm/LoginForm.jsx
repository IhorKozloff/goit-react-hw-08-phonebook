import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { EntriesButton } from "components/Forms/FormComponents/EntriesButtons.styled";
import { StyledLink } from "components/GlobalStyles/GlobalStyles.styled"
import { UserLoginForm } from "components/Forms/LoginForm/LoginForm.styled";
import { userLogInOperation } from 'Redux/operations';
import { useDispatch } from "react-redux";

export const LoginForm = () => {

    const dispatch = useDispatch()

    const onFormSubmit = ({email, password}, {resetForm}) => {
        dispatch(userLogInOperation({email, password}));
        resetForm();
    };

    return (
    <Formik initialValues={{email:"", password:""}} onSubmit={onFormSubmit}>
        
        <UserLoginForm name='UserLoginForm'>
        <h3 style={{marginBottom: "71px"}}>Log in into your account </h3>
            <Input type={'email'}>
                Email
            </Input>

            <Input type={'text'}>
                Password
            </Input>
            <p style={{marginTop: "63px", marginBottom: "8px", textAlign: "center"}}>
                Forgot your password? <StyledLink to={"/register"}> Reestablish </StyledLink>
            </p>
            
            <EntriesButton type="submit" name="btn">Log In</EntriesButton>
        </UserLoginForm>
    </Formik>
    );
};