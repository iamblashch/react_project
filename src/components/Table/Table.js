import scss from './Table.module.scss';
import React from 'react';
import Select from 'components/Select/Select';
import { useSelector } from 'react-redux';
import financesSelector from '../../redux/finances/financial-selectors';
import InlineLoader from 'components/InlineLoader';

const Table = ({
  data,
  monthForState,
  setMonthForState,
  yearForState,
  setYearForState,
  show,
}) => {
  const { arrayCategoriesSummary, newIncomeSummary, newExpenseSummary } = data;

  const periodForSelects = useSelector(financesSelector.getPeriodForStatistic);
  const isLoading = useSelector(financesSelector.getLoading);
  const error = useSelector(financesSelector.getError);

  if (error) {
    return null;
  }
  return (
    <div className={scss.expenses__wrapper}>
      <div className={scss.select__wrapper}>
        <Select
          options={periodForSelects.months}
          selected={monthForState}
          setSelected={setMonthForState}
          positioncss
          key={'1'}
        />
        <Select
          options={periodForSelects.years}
          selected={yearForState}
          setSelected={setYearForState}
          key={'2'}
        />
      </div>

      <div className={scss.table__wrapper}>
        <div className={scss.table__title}>
          <span>Category</span>
          <span>Amount</span>
        </div>
        {show ? (
          <div className={scss.tableScrollBox}>
            {isLoading ? (
              <InlineLoader />
            ) : (
              <ul className={scss.table__list}>
                {arrayCategoriesSummary?.map(category => {
                  return (
                    <li key={category.name} className={scss.table__item}>
                      <div
                        style={{
                          backgroundColor: `${category.backgroundColor}`,
                        }}
                        className={scss.table__color}
                      ></div>
                      <div className={scss.table__name}>{category.name}</div>
                      <div className={scss.table__total}>{category.total}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : (
          <p className={scss.text__messeng}>
            You don't have expenses for this period
          </p>
        )}
      </div>
      {!isLoading && (
        <ul className={scss.table__foot}>
          <li className={scss.table__bottom}>
            <span className={scss.first}>Expenses:</span>
            <span className={scss.second__expense}>{newExpenseSummary}</span>
          </li>
          <li className={scss.table__bottom}>
            <span className={scss.first}>Incomes:</span>
            <span className={scss.second__income}>{newIncomeSummary}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Table;
