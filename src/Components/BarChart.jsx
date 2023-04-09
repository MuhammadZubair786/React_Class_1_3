import { Bar } from "react-chartjs-2"

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
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function BarChart(){
    const data = {
        labels: ["JAN","FEB","MARCH"],
        datasets: [
          {
            label: '# of Votes',
            data: [400,34,45],
            backgroundColor:[
                "red","blue","yellow"
            ],
            borderColor:[
                "green","pink","red"
            ],
          
            borderWidth: 5,
          },
          {
            label: '# of Votes',
            data: [340,24,450],
            backgroundColor:[
                "yellow","pink","orange"
            ],
            borderColor:[
                "green","pink","red"
            ],
          
            borderWidth: 5,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        
       
        
      };
    return(
        <>
        <div style={{width:500,height:400}}>

        <Bar data={data} options={options} height={300} />
        </div>

        </>
    )
}

export default BarChart