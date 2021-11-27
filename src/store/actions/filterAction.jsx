export const filterAction = (filter) => {
    return (dispacth, getState) => {
        dispacth({type:'FILTER_DATA', filter:filter})
    }
}