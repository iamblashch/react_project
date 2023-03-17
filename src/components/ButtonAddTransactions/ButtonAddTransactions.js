import styled from './ButtonAddTransactions.module.scss'
import { useDispatch } from 'react-redux';
import { toggleModalAddTransaction } from 'redux/modal/modalSlice';
// import {GrAdd} from "re"
const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
  <button className={styled.button} type='button' onClick={()=>dispatch(toggleModalAddTransaction())}>
        <p className={styled.button__wrap}>+</p>
      </button>
  );
};
export default ButtonAddTransactions;
