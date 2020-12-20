const initialState = {
    project:[],
    isLoading:false,
    projectDetail:[]
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