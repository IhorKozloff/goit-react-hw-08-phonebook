import {HomepageContainer, WelcomeTextWrapper, WelcomeTitle, WelcomeTextContent } from "components/HomepageComponents/HomepageUpper/HomepageUpper.styled"

export const HomepageUpper = ({children}) => {



    return (
        <HomepageContainer className='homepageContainer'>
            <WelcomeTextWrapper>
                <WelcomeTitle>Welcome to Homepage yours Phonebook application</WelcomeTitle>
                <WelcomeTextContent>Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.</WelcomeTextContent>
                <WelcomeTextContent>Ipsum morbi adipiscing faucibus eu odio in tellus risus.</WelcomeTextContent>
            </WelcomeTextWrapper>
            {children}
        </HomepageContainer>
    )
}