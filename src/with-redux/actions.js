import {actionTypes} from './actionTypes';
export const setName = (name) => 
{
  return {
    type: actionTypes.CHANGE_NAME,
    payload: name
  }
}
