import './Signup.scss';

const Signup = () => {
  return (
    <form className='form container'>
      <h1>Signup</h1>

      <div className='form__row'>
        <input type='text' name='name' placeholder='Name' />
      </div>

      <div className='form__row'>
        <input type='text' name='email' placeholder='Email' />
      </div>

      <div className='form__row'>
        <input type='password' name='password' placeholder='Password' />
      </div>

      <div className='form__row'>
        <input
          type='password'
          name='passwordRepeat'
          placeholder='Password Repeat'
        />
      </div>

      <div className='form__row'>
        <label htmlFor='checkbox' className='checkbox-label'>
          <input type='checkbox' id='checkbox' name='checkbox' />
          Accept Terms of Use!
        </label>
      </div>

      <div className='form__action'>
        <button type='submit'>Register</button>
      </div>
    </form>
  );
};

export default Signup;
