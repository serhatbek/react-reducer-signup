import './Signup.scss';
import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false,
};

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

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

  return (
    <form className='form container' onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <div className='form__row'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
        />
      </div>

      <div className='form__row'>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleChange}
        />
      </div>

      <div className='form__row'>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
      </div>

      <div className='form__row'>
        <input
          type='password'
          name='passwordRepeat'
          placeholder='Password Repeat'
          onChange={handleChange}
        />
      </div>

      <div className='form__row'>
        <label className='checkbox-label'>
          <input type='checkbox' name='termsAccepted' onChange={handleChange} />
          Accept Terms of Use!
        </label>
      </div>

      <div className='form__action'>
        <button
          type='submit'
          className={!validateState(state) ? 'disabled' : null}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Signup;
