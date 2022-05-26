import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { UserRegisterForm } from "components/Forms/RegisterForm/RegisterForm.styled";



export const RegisterForm = () => {

    const onFormSubmit = (values, {resetForm}) => {
        console.log(values)
        resetForm();
    };

    return (
    <Formik initialValues={{username:"", email:"", password:""}} onSubmit={onFormSubmit}>
        <UserRegisterForm name='UserRegisterForm'>

            <h3>Sign Up for Contacts Book</h3>

            <Input type={'text'}>
                Username
            </Input>

            <Input type={'email'}>
                Email
            </Input>

            <Input type={'text'}>
                Password
            </Input>

            <button type="submit" name="btn">Register</button>

        </UserRegisterForm>
    </Formik>
    );
};