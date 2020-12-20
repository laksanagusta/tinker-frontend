import axios from 'axios';

// const APIurl = 'https://jinx-server.herokuapp.com/api/v1/';
const APIurl = 'http://localhost:5000/api/v1/';

export const getProducts = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return(
            axios.get(APIurl+'getProducts')
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
            axios.get(APIurl+'getProductDetails/'+data.productId)
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