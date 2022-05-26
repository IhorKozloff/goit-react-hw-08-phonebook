import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { UserLoginForm } from "components/Forms/LoginForm/LoginForm.styled";

export const LoginForm = () => {

    const onFormSubmit = (values, {resetForm}) => {
        console.log(values)
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