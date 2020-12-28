import axios from 'axios';
import { url } from '../../../../utils/urls';

const APIurl = 'api/v1/';

export const getProducts = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getProducts`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                dispatch({type:'CHANGE_PRODUCT', value:res.data.allProduct})
                resolve(res.data.allProduct)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}

export const getProjectDetails = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(`${url.baseUrl}${APIurl}getProductDetails/${data.productId}`)
            .then((res) => {
                dispatch({type:'CHANGE_LOADING', value:false})
                dispatch({type:'CHANGE_PRODUCTDETAILS', value:res.data})
                resolve(res.data)
            })
            .catch((error) => {
                console.log(error);
                reject(false)
            })
        )
    })
}