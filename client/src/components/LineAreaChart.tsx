import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { weeklyWordsCntState } from "../atoms";
import { ChartContainer } from "../styles/chartStyle";

interface ILineChartProp {
  labels: string[];
  avg: number;
}

const LineAreaChart = ({ labels, avg }: ILineChartProp) => {
  const weeklyWordsCnt = useRecoilValue(weeklyWordsCntState);

  const series = [
    {
      name: "새로 추가된 단어",
      type: "line",
      data: weeklyWordsCnt,
    },
    {
      name: "일일 평균",
      type: "area",
      data: [avg, avg, avg, avg, avg, avg, avg, avg],
    },
  ];

  const options: ApexOptions = {
    series,
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["rgba(104, 189, 225, 1)", "rgba(219, 95, 41, 0.3)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [4, 1],
    },
    fill: {
      type: ["solid"],
      opacity: [1, 0.2],
    },
    title: {
      text: "지난 1주 간 새로 추가된 단어",
      align: "center",
      style: { fontSize: "18px", color: "rgba(123, 60, 60, 0.9)" },
    },
    markers: {
      size: [1, 0],
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: labels,
    },
    tooltip: {
      shared: true,
      y: {
        formatter: function (val) {
          return `${val}개`;
        },
      },
    },
  };

  return (
    <ChartContainer>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
        width={380}
      />
    </ChartContainer>
  );
};

export default LineAreaChart;
