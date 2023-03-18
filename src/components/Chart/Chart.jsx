import React from 'react';
import { useSelector } from 'react-redux';
import finance from 'redux/finances/finances-operations';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import scss from '../Chart/Chart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);
const dataFinance = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = ({ data, expenseSummaryChart, show }) => {
  const isLoading = useSelector(finance.getLoading);
  return (
    <div className={scss.wrapper__chart}>
      <h2 className={scss.title}>Statistics</h2>

      {show ? (
        <div className={scss.wrapper__doughnut}>
          {!isLoading && (
            <>
              <Doughnut
                data={data}
                options={{
                  maintainAspectRatio: false,
                  cutoutPercentage: 90,
                  plugins: {
                    legend: { display: false },
                  },
                }}
              />
              <div className={scss.balance__wrapper}>
                <span className={scss.symbol}>&#8372;</span>
                {expenseSummaryChart}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={scss.wrapper__doughnut}>
          {!isLoading && (
            <>
              <Doughnut
                data={dataFinance}
                options={{
                  maintainAspectRatio: false,
                  cutoutPercentage: 90,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      enabled: false,
                    },
                  },
                }}
              />

              <div className={scss.balance__wrapper}>
                <span className={scss.symbol}>&#8372;</span>
                {expenseSummaryChart}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Chart;
