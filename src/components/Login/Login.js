import React from 'react';
import st from './login.module.scss';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { chengeLoginmodal,chengeFalsey,chengeTrusy } from '../../store/homeSlice';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(chengeTrusy({mod:'loginModal'}));
    dispatch(chengeFalsey({mod:'overmodal'}));
    document.body.style.overflow = "auto";
  }
  const submitForm = (e) => {
    e.preventDefault();
    if (password && email) {
      closeModal();
      dispatch(chengeTrusy({mod:'user'}));
      dispatch(chengeFalsey({mod:'overmodal'}));
    }
  }
  return (
    <div className={st.login}>
      <div className={st.loginTop}>
        <p>Login</p>
        <GrClose onClick={closeModal} />
      </div>
      <form className={st.forms} onSubmit={submitForm}>
        <label htmlFor='email'>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} name='email' type="email" required />
        <label htmlFor='pass'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} name='pass' type="password" required />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default Login;