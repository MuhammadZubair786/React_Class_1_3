import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "March", "april", "may", "june"],
    datasets: [
      {
        borderColor: "green",
        // fill:true,
        label: "totalpeople",
        data: [12, 19, 3, 56, 30, 34],
        backgroundColor: "blue",
      },
    ],
  };
  const options = {
    indexAxis: "y",
  };
  return (
    <h1>
      <Container>
        <Row>
          <Col lg={12}>Hello line chart</Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div style={{ width: "400px", height: "300px" }}>
              <Line width={400} height={300} data={data} options={options} />
            </div>
          </Col>
          <Col lg={4}>
            <div style={{ marginLeft:"20px",width: "400px", height: "300px" }}>
              <Line width={400} height={300} data={data} options={options} />
            </div>
          </Col>
        </Row>
      </Container>
    </h1>
  );
}

export default LineChart;
