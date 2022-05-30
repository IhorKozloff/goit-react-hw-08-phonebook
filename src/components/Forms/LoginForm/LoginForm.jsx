import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { UserLoginForm } from "components/Forms/LoginForm/LoginForm.styled";
import { userLogInOperation } from 'Redux/operations';
import { useDispatch } from "react-redux";

export const LoginForm = () => {

    const dispatch = useDispatch()

    const onFormSubmit = ({email, password}, {resetForm}) => {
        console.log({email, password});
        dispatch(userLogInOperation({email, password}));
        resetForm();
    };

    return (
    <Formik initialValues={{email:"", password:""}} onSubmit={onFormSubmit}>
        <UserLoginForm name='UserLoginForm'>
            <Input type={'email'}>
                email
            </Input>

            <Input type={'text'}>
                Password
            </Input>

            <button type="submit" name="btn">Log In</button>
        </UserLoginForm>
    </Formik>
    );
};