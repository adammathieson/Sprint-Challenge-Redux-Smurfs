import { 
  SMURF_FETCHING, 
  SMURF_SUCCESS, 
  SMURF_FAILURE, 
  ADD_SMURF_START, 
  ADD_SMURF_SUCCESS, 
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
}
  from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCHING:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
      case ADD_SMURF_START:
      return {
        ...state,
        error: '',
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      }
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
