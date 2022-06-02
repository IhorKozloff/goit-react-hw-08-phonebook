import { LinksList, LinksListItem, NavigationBarWrapper} from "components/NavigationBar/NavigationBar.styled"
import { StyledLink } from "components/GlobalStyles/GlobalStyles.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";

export const NavigationBar = () => {
    const { isLoggedIn, user } = useSelector(state => state.registerAndLogIn);



    return (
        <NavigationBarWrapper className="navigation-bar-wrapper">
            <LinksList className="contentNavigate">
                <LinksListItem>
                    <StyledLink to={"/"}>Home</StyledLink>
                </LinksListItem>


                
                {isLoggedIn === true &&<LinksListItem>
                    <StyledLink to={"/phonebook"}>Phonebook</StyledLink>
                </LinksListItem>}

            </LinksList>


            {isLoggedIn === false && 
            <LinksList className="authNavigate">
                <LinksListItem>
                    <StyledLink to={"/login"}>Log In</StyledLink>
                </LinksListItem>


                <LinksListItem>
                    <StyledLink to={"/register"}>Register</StyledLink>
                </LinksListItem>

            </LinksList>}
            {isLoggedIn === true && <UserMenu email={user.email}/>}
        </NavigationBarWrapper>
        
    );
};