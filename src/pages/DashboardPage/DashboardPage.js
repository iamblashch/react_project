import { Header } from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';

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

              <div className={css.val}></div>
            </div>

            <div className={css.tab}>
              <table className={css.table}>
                <thead className={css.tableHead}>
                  <tr>
                    <th className={css.tableHeader} scope="col">
                      Date
                    </th>
                    <th className={css.tableHeader} scope="col">
                      Type
                    </th>
                    <th className={css.tableHeader} scope="col">
                      Category
                    </th>
                    <th className={css.tableHeader} scope="col">
                      Comment
                    </th>
                    <th className={css.tableHeader} scope="col">
                      Sum
                    </th>
                    <th className={css.tableHeader} scope="col">
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
