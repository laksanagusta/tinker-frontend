const initialState = {
    project:[],
    isLoading:false,
    projectDetail:[],
    serverURL:"http://ec2-13-250-113-162.ap-southeast-1.compute.amazonaws.com:8000/",
    s3url:"https://dika-portfolio.s3.ap-southeast-1.amazonaws.com/"
}

const reducer = (state=initialState, action) => {
    if(action.type === 'CHANGE_PROJECT'){
        return {
            ...state,
            project: action.value
        }
    }
    if(action.type === 'CHANGE_LOADING'){
        return {
            ...state,
            isLoading: action.value
        }
    }
    if(action.type === 'CHANGE_PROJECTDETAILS'){
        return {
            ...state,
            projectDetail: action.value
        }
    }
    return state;
}

export default reducer;