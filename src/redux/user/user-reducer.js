const inital_state={
  user_id:'',
  mail_id:''
}

const userReducer = (state=inital_state,action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':

    return {
      ...state,
      user_id:action.payload
    };

    case 'SET_MAIL':
    return {
      ...state,
      mail_id:action.payload
    }
    default:
    return state;

  }
}

export default userReducer;
