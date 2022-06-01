import styled from '@emotion/styled'

export const UserMenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const LogOutBtn = styled.button`
    background: #FFF;
    border: none;
    border-radius: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    text-align: center;
    color: linear-gradient(91.63deg, #FFB931 0.35%, #EAA318 99.45%);
    padding: 5px 15px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        background-color: #E8E1E1;
        opacity: 1;
    }
    &:active {
        transform: scale(0.95);
    }
`;
export const UserEmailText = styled.p`
font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    text-align: center;
    margin-right: 10px;
`;
export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 25px;
    margin-right: 5px;
`;