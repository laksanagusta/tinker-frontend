import axios from 'axios';

// const APIurl = 'https://jinx-server.herokuapp.com/api/v1/';
const APIurl = 'http://localhost:5000/apiSocialMedia/v1/';

export const getSocialMedia = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(APIurl+'getSocialMedia')
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