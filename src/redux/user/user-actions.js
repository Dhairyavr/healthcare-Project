export const setcurrentuser = user_id => ({
type:'SET_CURRENT_USER',
payload:user_id
});

export const setperpopup = () => ({
  type:'SET_PERMISSION_POPUP'
})

export const setviewpopup = () => ({
  type:'SET_VIEW_POPUP'
})
