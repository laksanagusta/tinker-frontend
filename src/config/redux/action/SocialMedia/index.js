import axios from 'axios';
import { url } from '../../../../utils/urls';

const APIurl = 'apiSocialMedia/v1/';

export const getSocialMedia = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getSocialMedia`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                dispatch({type:'CHANGE_SOCIALMEDIA', value:res.data.socialMedia})
                resolve(res.data.socialMedia)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}