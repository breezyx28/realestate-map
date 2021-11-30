import db from '../../modules/db.json';

const inintState = db;

const realestateReducer = (state = inintState, action) => {
  switch (action.type) {
    case 'GET_REALTIES':
      return state;
    case 'FILTER_REALTIES':
      //doing filter
      function capitalizeFirstLetter(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
      }

      function cleanNullValues(values){
        for (const [key, value] of Object.entries(values)) {
          if(value === null){
            delete values[key]
          }
        }

        return values
      }
      
      let filter = action.filterRealties;

      // cleaned "filter" without null values
      let cleanedValues = cleanNullValues(filter);

      // check if data is exists
      const isExist = (item, filterObject) => {
        return Object.entries(filterObject).every(([key, value]) => {
          if((key === 'propertyType') && (value.length > 0) && (value.includes(capitalizeFirstLetter(item[key])))){
            return value.includes(capitalizeFirstLetter(item[key]))
          }
          if(key === 'serviceType'){
            return capitalizeFirstLetter(item[key]) === value
          }
          if(key === 'rooms'){
            return (item[key].total >= value.rooms[0]) && (item[key].total <= value.rooms[1])
          }
          if(key === 'floors'){
            return item[key] === value.floors
          }
          if(key === 'price'){
            return item[key] >= value[0] && item[key] <= (value[1] === 1000 ? 1000000000 : value[1])
          }
          return true
        });
      };

      if(Object.keys(filter).length === 0 && filter.constructor === Object){
        return inintState;
      }

      let newState = state.filter((item) => {
        return isExist(item, cleanedValues)
      });

      console.log(newState);
      return newState
    default:
      return state;
  }
};

export default realestateReducer;
