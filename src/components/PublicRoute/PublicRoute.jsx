import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";


export const PublicRoute = ({redirectLink, children}) => {

  const regAndLogState = useSelector(state => state.registerAndLogIn)

    

    if (regAndLogState.isLoggedIn === true) {
        return <Navigate to={redirectLink} replace />;
      }
    
    return children;
}