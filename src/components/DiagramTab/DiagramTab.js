import scss from './DiagramTab.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import financesSelector from '../../redux/finances/financial-selectors';
import { getSummary } from 'redux/finance/finance-operation';
import { refresh } from 'redux/session/auth-operation';
import { allMonths } from 'assets/const';
import Loader from 'components/Loader/Loader';
import { IconContext } from 'react-icons';
import { FcStatistics } from 'react-icons/fc';
import { toast } from 'react-toastify';

const DiagramTab = () => {
  const [monthForState, setMonthForState] = useState('Month');
  const [yearForState, setYearForState] = useState('Year');
  const [period, setPeriod] = useState('');

  const isLoading = useSelector(financesSelector.getLoading);
  const summary = useSelector(financesSelector.getSummary);

  useEffect(() => {
    if (monthForState === 'Month' || yearForState === 'Year') {
      return;
    }
    const index = allMonths.findIndex(month => month === monthForState) + 1;
    if (new Date() < new Date(`${monthForState} ${yearForState}`)) {
      toast.error('Please select a past period');
      return;
    }
    setPeriod(`?month=${index}&year=${yearForState}`);
  }, [monthForState, yearForState]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSummary(period));
  }, [dispatch, period]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const dataAllSummaryForTabl = useSelector(
    financesSelector.getAllTransactionsForStat
  );

  const expenseSummaryChart = dataAllSummaryForTabl.newExpenseSummary;

  const dataAllSummaryForChart = useSelector(
    financesSelector.getDataAllSummaryForChart
  );

  const showChart = dataAllSummaryForChart?.datasets[0]?.data?.length ?? true;

  const data = useSelector(financesSelector.getFilteredData);
  const showStat = !!data?.length ? true : false;

  return (
    <>
      <section className={scss.section}>
        <h2 className={scss.title}>Statistics</h2>
        <div className={scss.wrapper}>
          {isLoading && !summary ? (
            <Loader />
          ) : (
            <>
              {showStat ? (
                <>
                  <Chart
                    data={dataAllSummaryForChart}
                    expenseSummaryChart={expenseSummaryChart}
                    show={showChart}
                  />
                  <Table
                    data={dataAllSummaryForTabl}
                    monthForState={monthForState}
                    setMonthForState={setMonthForState}
                    yearForState={yearForState}
                    setYearForState={setYearForState}
                    show={showChart}
                  />
                </>
              ) : (
                <div className={scss.noTransactions}>
                  <h2>Your statistics will be shown here</h2>
                  <IconContext.Provider
                    value={{
                      className: `${scss.react__icon}`,
                      style: {
                        width: '140px',
                        height: '130px',
                      },
                    }}
                  >
                    <FcStatistics />
                  </IconContext.Provider>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};
export default DiagramTab;
