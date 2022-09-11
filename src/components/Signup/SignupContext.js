import { createContext, useContext, useReducer } from 'react';
import { reducerSignup } from './reducerSignup';

const SignupContext = createContext();

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false,
};

const SignupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerSignup, initialState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === 'termsAccepted' ? checked : value,
    };
    dispatch(action);
  };

  const validateState = (state) => {
    return (
      state.password === state.passwordRepeat &&
      state.termsAccepted &&
      state.password.length > 4
    );
  };

  const values = {
    state,
    dispatch,
    handleChange,
    validateState,
  };

  return (
    <SignupContext.Provider value={values}>{children}</SignupContext.Provider>
  );
};

const useSignupContext = () => {
  return useContext(SignupContext);
};

export { SignupContextProvider, useSignupContext };
