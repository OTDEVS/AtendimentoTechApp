import axios from "axios"
import { apiURL } from "../environments/evironments";

async function signIn(loginData: any): Promise<any> {
    return new Promise((resolve) => {
        axios.post(`${apiURL}/login`, loginData)
            .then(
                (result) => {
                    if(result.status == 200){
                        resolve({
                            token: result.data.token,
                            refreshToken: result.data.refreshToken
                        })
                    }
                }
            ).catch((error) => {
                console.error(error);
            });
    })
}

export const authServices = { signIn }