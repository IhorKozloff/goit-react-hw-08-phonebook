import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import { RedirectButton } from "components/Forms/FormComponents/EntriesButtons.styled"
import { Link } from "react-router-dom";

export const Register = () => {



    return (
        <>
            <RegisterForm></RegisterForm>
            <Link to={"/login"}>
                <RedirectButton type="button" style={{marginTop: '30px'}}>Already have an account? Click to Login</RedirectButton>
            </Link>
            
        </>
    )
};
