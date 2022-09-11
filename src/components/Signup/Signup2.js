import './Signup.scss';
import { useSignupContext } from './SignupContext';

const Signup2 = () => {
  const { handleChange, validateState, state } = useSignupContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form with context & reducer', state);
  };
  return (
    <form className='form container--v2 container' onSubmit={handleSubmit}>
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

export default Signup2;
