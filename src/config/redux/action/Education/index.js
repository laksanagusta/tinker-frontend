import axios from 'axios';

// const APIurl = 'https://jinx-server.herokuapp.com/api/v1/';
const APIurl = 'http://localhost:5000/apiEducation/v1/';

export const getEducation = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(APIurl+'getEducation')
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                dispatch({type:'CHANGE_PRODUCT', value:res.data.education})
                resolve(res.data.education)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}
