
const reducer = (state = {
  users: []
}, action) => {
  switch(action.type){
    case 'SET_USERS_FULFILLED': {
      state = {
        ...state,
        users: action.payload
      };
      break;
    }

    case 'CLEAR_USERS': {
      state = {
        ...state,
        users: []
      };
      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
