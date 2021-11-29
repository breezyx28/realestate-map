export const getRealties = (realties) => {

    return (dispatch, getState) => {
        dispatch({type:'GET_REALTIES', realties: realties})
    }

}

export const filterRealties = (filter) => {

    return (dispatch, getState) => {
        dispatch({type:'FILTER_REALTIES', filterRealties: filter})
    }

}