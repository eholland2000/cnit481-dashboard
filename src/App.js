import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      title: {
        text: 'Daily Stock Performance'
      }, // title of the chart
      subtitle: {
        text: 'Historical Portfolio Data'
      }, // subtitle of the chart
      yAxis: {
        title: {
          text: 'Price'
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.4,
        categories: ['11/21', '11/22', '11/23', '11/25', '11/28', '11/29', '11/30', '12/1', '12/2', '12/5', '12/6', '12/7'],
        title: {
          text: 'Day'
        } // the title of the X Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Google',
        data: [95.83, 97.33, 98.82, 97.60, 96.25, 95.44, 101.45, 101.28, 100.83, 99.87, 97.31, 97]
      }, {
        name: 'Meta Technologies',
        data: [109.86, 111.44, 112.24, 111.41, 108.78, 109.46, 118.10, 120.44, 123.49, 122.43, 114.12, 114]
      }, {
        name: 'Microsoft',
        data: [242.05, 245.03, 247.58, 247.49, 241.76, 240.33, 255.14, 254.69, 255.02, 250.20, 245.12, 245]
      }, {
        name: 'Apple',
        data: [148.01, 150.18, 151.07, 148.11, 144.22, 141.17, 148.03, 148.31, 147.81, 146.63, 142.91, 142]
      }]);
    }, 2000);
  }, []);

  return (
      <div className="App">
        <h3>User 1's Stock Portfolio Dashboard</h3>
        <div ref={refContainer} />
        <div className="Table">
          <table>
            <tr>
              <th>Stock Name</th>
              <th>Price</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>Google</td>
              <td>135.70</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>91.79</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>71.71</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>---------</td>
              <td>---------</td>
              <td>---------</td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>313.26</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>258.33</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>201.91</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>---------</td>
              <td>---------</td>
              <td>---------</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>308.09</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>227.90</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>165.49</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>---------</td>
              <td>---------</td>
              <td>---------</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>173.77</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>130.39</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>75.80</td>
              <td>2019</td>
            </tr>
          </table>
        </div>
      </div>
  );
}

export default App;