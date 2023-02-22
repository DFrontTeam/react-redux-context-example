import {actionTypes} from './actionTypes';
const INITIAL_PROFILE = {
  name: 'Guest',
  age: 18,
};

const reducer = (state = INITIAL_PROFILE,action) => {
  switch(action.type) {
    case actionTypes.CHANGE_NAME:
       return { ...state, name: action.payload };
    default:
       return state;
 }
}

export default reducer;
