import { useMediaQuery } from 'react-responsive';
import styles from '../TransactionsList/TransactionsList.module.scss';
import { Pencil } from './pencilSVG';

// Nastya
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/finances/finances-operations';

export const TransactionsList = () => {
  const dispatch = useDispatch()

  const onDeleteContact = id => {
    console.log('hi!')
    dispatch(deleteTransaction(id));
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  console.log(isDesktopOrLaptop);
  return (
    <>
      {isDesktopOrLaptop && (
        <div className={styles.tableTrList}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.tableHeader} scope="col">
                  Date
                </th>
                <th className={styles.tableHeader} scope="col">
                  Type
                </th>
                <th className={styles.tableHeader} scope="col">
                  Category
                </th>
                <th className={styles.tableHeader} scope="col">
                  Comment
                </th>
                <th className={styles.tableHeader} scope="col">
                  Sum
                </th>
                <th className={styles.tableHeader} scope="col"></th>
              </tr>
            </thead>
          </table>
          <div className={styles.tableScrollBox}>
            <table className={styles.dataTable}>
              <tbody className={styles.tableBody}>
                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>04.01.19</td>
                  <td className={styles.tableData}>-</td>
                  <td className={styles.tableData}>Other</td>
                  <td className={styles.tableData}>Gift for your wife</td>
                  <td className={styles.tableData_EXPENSE}>300.00</td>
                  <td className={styles.tableDataBtns}>
                    <button onClick={() => {
                      console.log('click')
                      onDeleteContact()
                    }} className={styles.mobailTrItem__btnDelete}>
                      Delete
                    </button>
                    <button className={styles.mobailTrItem__btnEdit}>
                      <Pencil />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* //Mobile version */}
      {!isDesktopOrLaptop && (
        <div>
          <ul className={styles.mobailTrList}>
            <li className={styles.mobailTrItem_EXPENSE}>
              <ul className={styles.mobailTrItem__list}>
                <li className={styles.mobailTrItem__row}>
                  <span className={styles.mobailTrItem__cell}>Data</span>
                  <span className={styles.mobailTrItem__cell_value}>
                    04.01.19
                  </span>
                </li>
                <li className={styles.mobailTrItem__row}>
                  <span className={styles.mobailTrItem__cell}>Type</span>
                  <span className={styles.mobailTrItem__cell_value}>-</span>
                </li>
                <li className={styles.mobailTrItem__row}>
                  <span className={styles.mobailTrItem__cell}>Category</span>
                  <span className={styles.mobailTrItem__cell_value}>Other</span>
                </li>
                <li className={styles.mobailTrItem__row}>
                  <span className={styles.mobailTrItem__cell}>Comment</span>
                  <span className={styles.mobailTrItem__cell_value}>
                    Gift for your wife
                  </span>
                </li>
                <li className={styles.mobailTrItem__row}>
                  <span className={styles.mobailTrItem__cell}>Sum</span>
                  <span className={styles.mobailTrItem__cell_value_EXPENSE}>
                    300.00
                  </span>
                </li>
                <li className={styles.mobailTrItem__row}>
                  <button className={styles.mobailTrItem__btnDelete}>
                    Delete
                  </button>
                  <button className={styles.mobailTrItem__btnEdit}>
                    <Pencil />
                    Edit
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
