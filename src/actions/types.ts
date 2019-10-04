import { Employees } from '../types/Employee';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const SUCCESS_EMPLOYEES = 'SUCCESS_EMPLOYEES';
export const FAILURE_EMPLOYEES = 'FAILURE_EMPLOYEES';


// TypeScript Action Types

export interface FetchEmployeesAction {
  type: typeof FETCH_EMPLOYEES
}


export interface SuccessEmployeesAction {
  type: typeof SUCCESS_EMPLOYEES,
  employees: Employees[],
}

export interface FailureEmployeesAction {
  type: typeof FAILURE_EMPLOYEES,
  employees: [],
}

// All Action Types
export type EmployeesActionTypes =
  | FetchEmployeesAction
  | SuccessEmployeesAction
  | FailureEmployeesAction;



// All Action Types Together
export type AppActions = EmployeesActionTypes;
