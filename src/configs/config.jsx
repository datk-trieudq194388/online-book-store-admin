import { getRefreshToken } from "../api/AuthAPI";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

export const SERVER_ADDR = 'http://localhost:8888'

export const RefreshToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwt_decode(accessToken);

    if(Date.now() >= decodedToken.exp * 1000){
        const refreshToken = Cookies.get('refreshToken');
        console.log(refreshToken)
        
        const res = await getRefreshToken(refreshToken);

        if(!res.ok){
            alert('Bạn cần đăng nhập lại!')
            localStorage.removeItem('accessToken');
            localStorage.removeItem('firstname');
            Cookies.remove('refreshToken');
            return false;
        }

        localStorage.setItem('accessToken', res.data.accessToken);
        Cookies.set('refreshToken', res.data.refreshToken, { expires: 30}); 
    }
    else console.log('valid token')

    return true;
}