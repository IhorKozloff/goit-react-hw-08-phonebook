import { Outlet } from "react-router-dom";
import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { Container } from "components/GlobalStyles/GlobalStyles.styled";




export const Layout = () => {
   

   return (
       <>
        <Container className={"container"}>

            <NavigationBar/>

            
        </Container>
        
        <Container>
            <Outlet/>
        </Container>
        
       </>
   )
};