///REACT
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
import { getError } from '../../redux/auth/auth-selectors';

const RegistrationForm = () => {
  const [stateRegistr, setStateRegistr] = useState(initialState);
  const [dublicat, setDublicat] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const hendleChange = e => {
    const { name, value } = e.target;
    setStateRegistr(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hendlSubmit = e => {
    e.preventDefault();
    if (stateRegistr.password !== stateRegistr.confirmPassword) {
      setDublicat(prevState => !prevState);
      return;
    }
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
      {error && <p className={Style.errorText}>{error}</p>}
      {dublicat && <p className={Style.errorText}>Enter the same password</p>}
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
