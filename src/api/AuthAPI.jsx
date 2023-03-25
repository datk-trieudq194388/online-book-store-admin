import { RefreshToken, SERVER_ADDR } from "../configs/config";

export const login = async (account) => {

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: account.account,
          password: account.password
        })
      }

      const response = await fetch(`${SERVER_ADDR}/user/login`, options);
      
      const data = await response.json();
      console.log(data)

      return {data: data, status: response.status, ok: response.ok};
} 

export const logout = async () => {

    const validRefToken = await RefreshToken();
    if(!validRefToken) return false;

    const token = localStorage.getItem('accessToken');
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    };
    const response = await fetch(`${SERVER_ADDR}/user/logout`, options);
    const data = await response.json();
    console.log(data);

    return {data: data, status: response.status, ok: response.ok};
} 

export const getRefreshToken = async (refreshToken) => {

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`
        }
    }
    const response = await fetch(`${SERVER_ADDR}/refresh-token`, options);
    
    const data = await response.json();
    console.log(data)

    return {data: data, ok: response.ok}

}



