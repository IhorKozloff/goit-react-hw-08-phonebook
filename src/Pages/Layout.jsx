import { Outlet } from "react-router-dom";
import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Container } from "components/GlobalStyles/GlobalStyles.styled";
import { useSelector } from "react-redux";



export const Layout = () => {
    const { isLoggedIn, user } = useSelector(state => state.registerAndLogIn)

   return (
       <>
        <Container style={{flexDirection: 'row', justifyContent: 'space-between'}}>

            <NavigationBar/>

            {isLoggedIn === true && <UserMenu email={user.email}/>}
        </Container>
        
        <Container>
            <Outlet/>
        </Container>
        
       </>
   )
};