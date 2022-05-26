import { Outlet } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";
import { Container } from "components/GlobalStyles/GlobalStyles.styled";


export const Layout = () => {


   return (
       <>
        <Container>
            <Navigation/>
        </Container>
        
        <Container>
            <Outlet/>
        </Container>
        
       </>
   )
};