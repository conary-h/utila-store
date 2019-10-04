import { SUCCESS_EMPLOYEES, EmployeesActionTypes } from '../actions/types';
import { Employees } from '../types/Employee';

const initialState: Employees[] = [];
  
const reducer = (state = initialState, action: EmployeesActionTypes): Employees[] => {
    switch (action.type) {
       case SUCCESS_EMPLOYEES:

         return [
            ...action.employees,
         ];
       default:
          return state;
     }
  };
  
  export default reducer;
  