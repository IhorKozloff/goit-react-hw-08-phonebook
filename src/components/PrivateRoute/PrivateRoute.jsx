import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";


export const PrivateRoute = ({redirectLink, children}) => {

  const regAndLogState = useSelector(state => state.registerAndLogIn)
  console.log(regAndLogState)
    

    if (regAndLogState.isLoggedIn === false) {
        return <Navigate to={redirectLink} replace />;
      }
    
    return children;
}