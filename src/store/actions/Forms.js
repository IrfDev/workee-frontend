export const FORM_SUBMIT = 'FORM_SUBMIT';
export const NEW_OBJECT = 'SET_NEW_OBJECT'

export const submitForm = (target, data) => ({
  type: FORM_SUBMIT,
  target,
  data
});

export const newObject = (target, data) => ({
  type: NEW_OBJECT,
  target, 
  data
})