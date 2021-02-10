const initialState = {
    project:[],
    isLoading:false,
    projectDetail:[],
    serverURL:"http://ec2-18-222-196-235.us-east-2.compute.amazonaws.com:8000/",
    s3url:"https://tinker-storage.s3.us-east-2.amazonaws.com/"
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