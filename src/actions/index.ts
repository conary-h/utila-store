import { FETCH_EMPLOYEES, SUCCESS_EMPLOYEES, AppActions } from './types';
import { Employees } from '../types/Employee';

export function successEmployees(employees: Employees[]): AppActions {

  return {
    type: SUCCESS_EMPLOYEES,
    employees,
  }
}


  export function fetchEmployees(): AppActions {
    return {
      type: FETCH_EMPLOYEES,
    }
  }
    