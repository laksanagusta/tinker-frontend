import axios from 'axios';
import { url } from '../../../../utils/urls';


const APIurl = 'apiDesign/v1/';

export const getDesign = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getDesign`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                resolve(res.data.design)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}
