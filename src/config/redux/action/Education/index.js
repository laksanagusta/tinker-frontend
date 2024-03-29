import axios from 'axios';
import { url } from '../../../../utils/urls';


const APIurl = 'apiEducation/v1/';

export const getEducation = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getEducation`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                resolve(res.data.education)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}
