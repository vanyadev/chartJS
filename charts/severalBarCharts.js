const severalBarChartsData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Orange Bar",
      data: [10, 4, 13, 15, 12, 8],
      backgroundColor: ["rgba(255, 99, 18, 1)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
      categoryPercentage: 0.5,
      order: 0,
    },
    {
      label: "Yellow Bar",
      data: [11, 3, 3, 18, 2, 3],
      backgroundColor: ["rgba(255, 223, 64, 1)"],
      borderColor: ["rgba(255, 159, 64, 1)"],
      borderWidth: 1,
      order: 1,
    },
  ],
};

const severalBarChartsConfig = {
  type: "bar",
  data: severalBarChartsData,
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart7 = new Chart(
  document.getElementById("severalBarCharts"),
  severalBarChartsConfig
);
