import React from 'react';

import { ColumnChart } from 'react-chartkick'
import 'chart.js'

export default function Charts() {
  return(
    <div>
      <ColumnChart
      data = {[
        {
          name: "Dólar",
          data: {
          "2019-12-31": 3.73,
          "2020-01-31": 4.15,
          "2020-02-29": 4.34,
          "2020-03-31": 4.89,
          "2020-04-30": 5.33,
          "2020-05-31": 5.64,
          "2020-06-30": 5.20,
          "2020-07-31": 5.28,
          "2020-08-31": 5.45,
          "2020-09-30": 5.40,
          "2020-10-31": 5.63,
          "2020-11-30": 5.42
          }
        },
        {
          name: "Euro",
          data: {
          "2019-12-31": 4.50,
          "2020-01-31": 4.75,
          "2020-02-29": 4.93,
          "2020-03-31": 5.74,
          "2020-04-30": 6.00,
          "2020-05-31": 5.92,
          "2020-06-30": 6.13,
          "2020-07-31": 6.15,
          "2020-08-31": 6.55,
          "2020-09-30": 6.57,
          "2020-10-31": 6.69,
          "2020-11-30": 6.35
          }
        }
      ]}
      />
    </div>
  )
}