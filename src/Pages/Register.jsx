import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () => {



    return (
        <>
            <RegisterForm></RegisterForm>
            <Link to={"/login"}>
                <button type="button">
                    Already have an account? Login now.
                </button>
            </Link>
            
        </>
    )
};
