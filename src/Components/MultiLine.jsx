
import { Line } from 'react-chartjs-2'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    BarElement,
    Legend,
  } from 'chart.js';



  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    BarElement,
    Legend
  );
  
function MultiLineChart(){

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            borderColor: "green",
            // fill:true,
            label: "totalpeople",
            data: [12, 19, 3, 56, 30, 34],
            backgroundColor: "blue",
          },
          {
            borderColor: "pink",
            // fill:true,
            label: "totalMen",
            data: [5, 19, 30, 56, 12, 34],
            backgroundColor: "red",
          },
          {
            borderColor: "blue",
            // fill:true,
            label: "totalwomen",
            data: [50, 19, 10, 6, 2, 4],
            backgroundColor: "red",
          },
        ],
      };
      const options = {
        indexAxis: "y",
      };
    return(
        <h1>
            Hello line chart
            <div style={{ width: "800px", height: "400px" }}>
            <Line width={800} height={400} data={data} options={options} />
            </div>
        </h1>
    )
}

export default MultiLineChart

