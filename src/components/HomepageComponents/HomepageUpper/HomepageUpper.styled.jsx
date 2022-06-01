import styled from '@emotion/styled'
import wallpaperMans from "../../../img/homepageWallpaperMans.png"


export const HomepageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("${wallpaperMans}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 80vh;
`;
export const WelcomeTextWrapper = styled.div`
    width: 450px;
    margin-top: 20px;
`;

export const WelcomeTitle = styled.h1`
    margin-bottom: 50px;
`;
export const WelcomeTextContent = styled.p`
    width: 100%;
    margin-bottom: 20px;
`;