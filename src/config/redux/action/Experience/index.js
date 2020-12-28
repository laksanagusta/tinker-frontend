import axios from 'axios';
import { url } from '../../../../utils/urls';


const APIurl = 'apiExperience/v1/';

export const getExperience = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getExperience`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                resolve(res.data.experience)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}
