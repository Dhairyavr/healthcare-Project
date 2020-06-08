export const setcurrentuser = user_id => ({
type:'SET_CURRENT_USER',
payload:user_id
});

export const setmail = mail_id => ({
  type:'SET_MAIL',
  payload:mail_id
})
