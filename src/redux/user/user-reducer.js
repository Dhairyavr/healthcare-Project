const inital_state={
  user_id:'',
  per_popup:false,
  view_popup:false
}

const userReducer = (state=inital_state,action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':

    return {
      ...state,
      user_id:action.payload
    };

    case 'SET_PERMISSION_POPUP':
    return {
      ...state,
      per_popup:!state.per_popup
    }

    case 'SET_VIEW_POPUP':
    return {
      ...state,
      view_popup:!state.view_popup
    }

    default:
    return state;

  }
}

export default userReducer;
