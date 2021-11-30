
const inintState = 
    {
            serviceType:null,
            propertyType:null,
            rooms:null,
            price:null
    }

const filterReducer = (state = inintState, action) => {

    switch (action.type) {
        case 'FILTER_DATA':
            let newState = action.filter
            return {
                ...state,
            }
        default:
            return state
    }
}

export default filterReducer