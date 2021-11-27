export const getRealties = (realties) => {

    return (dispatch, getState) => {
        dispatch({type:'GET_REALTIES', realties: realties})
    }

}