import { useDispatch } from 'react-redux';
import TextField from '../../shared/Component/textField/textField';
import fields from '../../shared/Component/textField/fields';
import Style from '../../components/RegistrationForm/RegistrationForm.module.scss';
import { useState } from 'react';
import { ButtonCurrent } from '../../shared/Component/ButtonFrom/ButtonFrom';
import { ButtonConversion } from '../../shared/Component/ButtonFrom/ButtonFrom';

import { Logo } from '../../shared/Component/LogoForm/logoForm';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { login } from '../../redux/auth/auth-operations';

const LoginForm = () => {
  const [stateLogin, setSateLogin] = useState({ email: '', password: '' })
  const dispatch = useDispatch();
  
const hendleChange = e => {
  const { name, value } = e.target;
    setSateLogin(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }
  const hendleSubmit = e => {
   e.preventDefault();
   dispatch(login(stateLogin));
   setSateLogin({email:'', password:''})
  }
  return (
    <>
      <Logo />
      <form className={Style.RegisterForm} onSubmit={hendleSubmit}>
        <TextField
          icon={<MdEmail className={Style.Icons} />}
          {...fields.email}
           value={stateLogin.email}
          onChange={hendleChange}
        />
        <TextField
          icon={<AiFillLock className={Style.Icons} />}
          {...fields.password}
          value={stateLogin.password}
          onChange={hendleChange}
        />
        <ButtonCurrent name={'LOG IN'} />
      </form>
      <ButtonConversion name={'REGISTER'} />
    </>
  );
};
export default LoginForm;
