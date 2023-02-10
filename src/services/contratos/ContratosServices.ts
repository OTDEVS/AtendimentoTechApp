import axios from "axios"
import { apiURL } from "../../environments/evironments";


async function getContratosData(idUsuario: any, token: any): Promise<any> {
    return new Promise((resolve) => {
        axios.get(`${apiURL}/usuario/${idUsuario}`, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then(
                (result) => {
                    if (result.status == 200) {
                        resolve({
                            contratosData: result.data
                        })
                    }
                }
            ).catch((error) => {
                console.error(error);
            });
    })
}

export const contratosServices = { getContratosData }