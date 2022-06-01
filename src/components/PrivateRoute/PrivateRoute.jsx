import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";


export const PrivateRoute = ({redirectLink, children}) => {

  const regAndLogState = useSelector(state => state.registerAndLogIn)
    

    if (regAndLogState.isLoggedIn === false) {
        return <Navigate to={redirectLink} replace />;
      }
    
    return children;
}