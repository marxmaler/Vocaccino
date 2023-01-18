import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { IChartProps } from "../interfaces";
import { ChartContainer } from "../styles/chartStyle";

const RadialBarChart = ({ labels, series }: IChartProps) => {
  const options: ApexOptions = {
    series: [{ data: series }],
    chart: {
      height: 350,
      type: "radialBar",
    },
    colors: ["rgba(104, 189, 225, 1)"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: labels,
    stroke: {
      lineCap: "round",
    },
  };
  return (
    <ChartContainer>
      <ReactApexChart
        type="radialBar"
        options={options}
        series={series}
        width={380}
      />
    </ChartContainer>
  );
};

export default RadialBarChart;
