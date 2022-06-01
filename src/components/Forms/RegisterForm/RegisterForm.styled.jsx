import styled from '@emotion/styled'
import { Form } from 'formik'
import registerFormWallpaper from '../../../img/registerFormWallpaper.jpg'


export const UserRegisterForm = styled(Form)`
    box-sizing: border-box;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 60px;
    padding-top: 150px;
    background-color: #FFF;
    background-image: url("${registerFormWallpaper}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;
`;

