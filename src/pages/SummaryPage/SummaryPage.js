import { Header } from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from '../../components/Currency/Currency';
import { TransactionsList } from '../../components/TransactionsList/TransactionsList';

import css from './DashboardPage.module.scss';

export const DashboardPage = () => {
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
          </div>
        </div>
      </main>
    </>
  );
};
