import { useDispatch } from "react-redux";
import { userLogOut } from "Redux/operations";
import avatar from "../../img/avatar.png";
import { UserMenuWrapper, LogOutBtn, UserEmailText, UserAvatar } from "components/UserMenu/UserMenu.styled"

export const UserMenu = ({email}) => {
    const dispatch = useDispatch();

    return (
        <UserMenuWrapper className="user-menu-wrapper">
            <UserAvatar>
                <img src={avatar} width="35px" height="35px" alt="user avatar"></img>
            </UserAvatar>
            <UserEmailText>{email && email}</UserEmailText>
            <LogOutBtn onClick={() => {
               dispatch(userLogOut());
            }}>Log Out</LogOutBtn>
        </UserMenuWrapper>
    )
};
