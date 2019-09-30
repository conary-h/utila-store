import { EMPLOYEES_REQUESTED, EMPLOYEES_WATCHER } from './types';

export function requestEmployees(employees: object) {

    console.log('employees action:', employees);

    return {
      type: EMPLOYEES_REQUESTED,
      employees,
    }
  }


  export function fetchEmployees() {
    return {
      type: EMPLOYEES_WATCHER,
    }
  }
    