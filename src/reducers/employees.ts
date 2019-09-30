import { EMPLOYEES_REQUESTED, EMPLOYEES_WATCHER } from '../actions/types';
  
const reducer = (state = {}, action: any) => {
    switch (action.type) {
       case EMPLOYEES_REQUESTED:
         return {
            ...state,
            emplooyees: action.employees,
        };
        case EMPLOYEES_WATCHER:
            console.log('Reducer prro!');
            return { ...state };
       default:
          return state;
     }
  };
  
  export default reducer;
  