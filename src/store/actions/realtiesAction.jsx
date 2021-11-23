export const getRealties = (realties) => {

    return (dispatch,getState) => {
        dispatch({type:'GET-REALTIES', realties: realties})
    }

}