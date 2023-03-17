import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from '../../components/Currency/Currency';

import ButtonAddTransactions from '../../components/ButtonAddTransactions/ButtonAddTransactions'
import ModalAddTransaction from "../../components/ModalAddTransaction/ModalAddTransaction" 
import  globalSelectors  from '../../redux/modal/modal-selectors';

import css from './SummaryPage.module.scss';

export const SummaryPage = () => {
  const showModal = useSelector(globalSelectors.getIsModalAddTransaction);
  return (
    <>
      <Header />
      <main className={css.section}>
        <div className={css.container}>
          <div className={css.commonWrapper}>
            <div className={css.wrapper}>
              <div>
                <Navigation />
                <Balance />
              </div>
              
              <div className={css.val}>
                <Currency />
              </div>
            </div>

            <div className={css.tab}>
            </div>
            <ButtonAddTransactions/>
          </div>
        </div>
        {showModal && <ModalAddTransaction />}
      </main>
    </>
  );
};