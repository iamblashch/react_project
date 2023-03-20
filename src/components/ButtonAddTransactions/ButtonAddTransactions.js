import styled from './ButtonAddTransactions.module.scss';
import { useDispatch } from 'react-redux';
import { toggleModalAddTransaction } from '../../redux/modal/modalSlice';
// import {getCategories} from "../../redux/finances/finances-operations"
const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModalAddTransaction())
    // dispatch(getCategories())
  }


  return (
    <button className={styled.button} type="button" onClick={onClick}>
      <p className={styled.button__wrap}>+</p>
    </button>
  );
};
export default ButtonAddTransactions;
