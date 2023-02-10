import axios from "axios"
import { apiURL } from "../environments/evironments";

async function getUserData(idUsuario: any, token: any): Promise<any> {
    return new Promise((resolve) => {
        axios.get(`${apiURL}/usuarioId/${idUsuario}`, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then(
                (result) => {
                    if (result.status == 200) {
                        resolve({
                            userData: result.data
                        })
                    }
                }
            ).catch((error) => {
                console.error(error);
            });
    })
}

export const userServices = { getUserData }