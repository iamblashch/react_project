///REACT
import { useState } from 'react';
import { useDispatch } from 'react-redux';
///STYLE
import Style from './RegistrationForm.module.scss';
///COMPONENT
import { Logo } from '../../shared/Component/LogoForm/logoForm';
import { PaswordLineBar } from './PasswordVerification/PasswordLineBar';
import { register } from '../../redux/auth/auth-operations';
import { ButtonCurrent } from '../../shared/Component/ButtonFrom/ButtonFrom';
import { ButtonConversion } from '../../shared/Component/ButtonFrom/ButtonFrom';
import { initialState } from './Initial/initialState';
import TextField from '../../shared/Component/textField/textField';
import fields from '../../shared/Component/textField/fields';
///ICON
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
///
// import {getAuth} from "../../redux/auth/auth-selectors"

const RegistrationForm = () => {

  const [stateRegistr, setStateRegistr] = useState(initialState);
  const dispatch = useDispatch();
  // const { error } = useSelector(getAuth)
  
  const hendleChange = e => {
    const { name, value } = e.target;
    setStateRegistr(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hendlSubmit = e => {
    e.preventDefault();
    const payload = {
      username: stateRegistr.username,
      email: stateRegistr.email,
      password: stateRegistr.password,
    };
    dispatch(register(payload));
    
  };

  return (
    <>
      <Logo />
      <form className={Style.RegisterForm} onSubmit={hendlSubmit}>
        <TextField
          icon={<MdEmail className={Style.Icons} />}
          value={stateRegistr.email}
          onChange={hendleChange}
          {...fields.email}
        />
        <TextField
          icon={<AiFillLock className={Style.Icons} />}
          value={stateRegistr.password}
          onChange={hendleChange}
          {...fields.password}
        />
        <TextField
          icon={<AiFillLock className={Style.Icons} />}
          value={stateRegistr.confirmPassword}
          onChange={hendleChange}
          {...fields.confirmPassword}
        />
        <PaswordLineBar stateRegistr={stateRegistr} />
        <TextField
          icon={<FaUser className={Style.Icons} />}
          value={stateRegistr.username}
          onChange={hendleChange}
          {...fields.username}
        />
        <ButtonCurrent name={`REGISTER`} />
      </form>
      <ButtonConversion name={`LOG IN`} />
    </>
  );
};
export default RegistrationForm;
