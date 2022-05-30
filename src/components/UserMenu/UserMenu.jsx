import { useDispatch } from "react-redux";
import { userLogOut } from "Redux/operations";

export const UserMenu = ({email}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{email && email}</p>
            <button onClick={() => {
               dispatch(userLogOut());
            }}>Log Out</button>
        </div>
    )
};
