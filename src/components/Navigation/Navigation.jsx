import { LinksList, LinksListItem, StyledLink} from "components/Navigation/Navigation.styled"


export const Navigation = () => {


    return (
        <LinksList>

            <LinksListItem>
                <StyledLink to={"/"}>Home</StyledLink>
            </LinksListItem>

            <LinksListItem>
                <StyledLink to={"/login"}>Log In</StyledLink>
            </LinksListItem>


            <LinksListItem>
                <StyledLink to={"/register"}>Register</StyledLink>
            </LinksListItem>

        </LinksList>
    );
};