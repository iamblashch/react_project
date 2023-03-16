import { initialInput } from '../Initial/initialInput';
import Style from './Inputs.module.scss';
export const Inputs = ({hendleChange,stateRegistr}) => {

const element = initialInput.map(({ id, title, name, type, icon }) => {
    return (
      <div key={id} className={Style.inputContainer}>
        <input
          className={Style.formField}
          name={name}
          type={type}
          onChange={hendleChange}
          required
          autoComplete="off"
          value={stateRegistr[name]}
        />
        {icon}
        <label className={Style.label}>{title}</label>
        <div className={Style.underline}></div>
      </div>
    );
  });
    return (
        <>
    {element}
    </>
        )
}