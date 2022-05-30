import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { UserRegisterForm } from "components/Forms/RegisterForm/RegisterForm.styled";
import { useDispatch } from "react-redux";
import { userRegistrationOperation } from 'Redux/operations'



export const RegisterForm = () => {

    const dispatch = useDispatch();

    const onFormSubmit = ({username, email, password}, {resetForm}) => {
        console.log({username, email, password});
        dispatch(userRegistrationOperation({name: username, email, password}));
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