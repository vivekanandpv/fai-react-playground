import * as React from 'react';

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [checkMeOut, setCheckMeOut] = React.useState<boolean>(false);

  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.target.name) {
      case 'username': {
        setUsername((s) => {
          return e.target.value;
        });
        break;
      }
      case 'password': {
        setPassword((s) => {
          return e.target.value;
        });
        break;
      }
      case 'checkMeOut': {
        setCheckMeOut((s) => {
          return e.target.checked;
        });
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    console.log('form submitted', {
      username,
      password,
      checkMeOut,
    });
  };

  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='username'
            value={username}
            onChange={handleInput}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='password'
            value={password}
            onChange={handleInput}
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            name='checkMeOut'
            checked={checkMeOut}
            onChange={handleInput}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
