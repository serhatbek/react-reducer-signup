export const reducerSignup = (state, action) => {
  return { ...state, [action.input]: action.value };
};
