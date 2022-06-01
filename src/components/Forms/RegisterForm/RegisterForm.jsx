import { Formik } from "formik";
import { Input } from "components/Forms/FormComponents/Input";
import { EntriesButton } from "components/Forms/FormComponents/EntriesButtons.styled";
import { UserRegisterForm } from "components/Forms/RegisterForm/RegisterForm.styled";
import { InputWrapper } from "components/Forms/FormComponents/InputWrapper.styled";
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
        <>
    <Formik initialValues={{username:"", email:"", password:""}} onSubmit={onFormSubmit}>
        <UserRegisterForm name='UserRegisterForm'>

            <h3>Sign Up for Contacts Book</h3>
            <InputWrapper>
                <li>
                    <Input type={'text'}>
                        Username
                    </Input>
                </li>

                <li>
                    <Input type={'email'}>
                        Email
                    </Input>
                </li>

               <li>
                    <Input type={'text'}>
                        Password
                    </Input>
               </li>
            </InputWrapper>
            

            <EntriesButton type="submit" name="btn">Sign Up</EntriesButton>

        </UserRegisterForm>
    </Formik>
    
    </>
    );
};