import styled from '@emotion/styled'
import { Form } from 'formik'
import loginFormWallpaper from '../../../img/loginFormWallpaper.jpg'

export const UserLoginForm = styled(Form)`
    box-sizing: border-box;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 60px;
    padding-top: 150px;
    background-color: #FFF;
    background-image: url("${loginFormWallpaper}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;
`;



   