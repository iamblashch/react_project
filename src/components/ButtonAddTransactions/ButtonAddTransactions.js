import styled from './ButtonAddTransactions.module.scss'
import { useDispatch } from 'react-redux';
import { toggleModalAddTransaction } from 'redux/modal/modalSlice';
const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
  <button className={styled.button} type='button' onClick={()=>dispatch(toggleModalAddTransaction())}>
        <span className={styled.button__wrap}>+</span>
      </button>
  );
};
export default ButtonAddTransactions;
