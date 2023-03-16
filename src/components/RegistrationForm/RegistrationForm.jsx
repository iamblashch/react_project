import Style from './RegistrationForm.module.scss';
import { useState } from 'react';
import { initialState } from './Initial/initialState';
import {Inputs} from "./Inputs/Inputs"
import { Logo } from './logo';
import { PaswordLineBar } from './PasswordLineBar/PasswordLineBar';

const RegistrationForm = () => {
  const [stateRegistr, setState] = useState(initialState);

  const hendleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const hendlSubmit = e => {
    e.preventDefault();
    if (stateRegistr.password !== stateRegistr.confirmPassword) {
      alert(`Enter the same passwords`);
      return;
    } else {
      console.log(stateRegistr);
      setState(initialState);
    }
  };

  return (
    <>
      <Logo />
      <form className={Style.RegisterForm} onSubmit={hendlSubmit}>
        <Inputs hendleChange={hendleChange} stateRegistr={stateRegistr}/>
        <PaswordLineBar stateRegistr={stateRegistr} />
        <button type="submit" className={Style.btnRegister}>
          REGISTER
        </button>
      </form>
      <button className={Style.btnLogin}>LOG IN</button>
    </>
  );
};
export default RegistrationForm;
