import { combineReducers } from 'redux';
import arrWordReducer from './arrWordReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';
const reducer = combineReducers({
    arrWord: arrWordReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer,
})
export default reducer;