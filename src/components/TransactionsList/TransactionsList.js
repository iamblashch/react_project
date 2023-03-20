import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { allTransactions } from 'redux/finances/finances-operations';
import { deleteTransaction } from 'redux/finances/finances-operations';
import financeSelectors from 'redux/finances/financial-selectors';

import { BiPencil } from 'react-icons/bi';
import styles from '../TransactionsList/TransactionsList.module.scss';
import { useEffect } from 'react';


import loginImg from '../../assets/images/login-img.png';


export const TransactionsList = () => {
  const items = useSelector(financeSelectors.getFilteredData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTransactions());
    
  }, [dispatch]);

  

  const onDeleteContact = id => {
    dispatch(deleteTransaction(id));
    // dispatch(allTransactions());
    setTimeout(() => {
    dispatch(allTransactions());
  }, 100);
  };
  // const TITLE = 

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
});
  const elements = items?.map(
    ({ id, type, transactionDate, category, comment, amount }) => {
      return (
        <tr key={id} className={styles.tableRow}>
          <td className={styles.tableData}>{transactionDate}</td>
          <td className={styles.tableData}>{type !== 'EXPENSE' ? '+' : '-'}</td>
          <td className={styles.tableData}>{category}</td>
          <td className={styles.tableData}>{comment}</td>
          {/* <td className={type === "EXPENSE" ? styles.tableData_EXPENSE : styles.tableData_INCOME}>{amount}</td> */}
          <td className={styles.tableDataBtns}>
            <button
              onClick={() => {
                onDeleteContact(id);
              }}
              className={styles.mobailTrItem__btnDelete}
            >
              Delete
            </button>
            <button className={styles.mobailTrItem__btnEdit}>
              <BiPencil />
            </button>
          </td>
        </tr>
      );
    }
  );

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
              <tbody className={styles.tableBody}>{elements}</tbody>
            </table>
            {elements.length>0? '' : <div> <h1 id='1' style={{textAlign:'center',marginTop:30}}>Please add a transaction</h1>  <img src={loginImg} alt="boy" className={styles.img} />
          </div>}
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
                    <BiPencil />
                    Edit
                  </button>
                </li>
              </ul>
            </li>
            
          </ul>
          {elements.length>0? '' : <div> <h1 id='1' style={{textAlign:'center',marginTop:30}}>Please add a transaction</h1>  <img src={loginImg} alt="boy" className={styles.img} />
          </div>}
        </div>
      )}
    </>
  );
};
