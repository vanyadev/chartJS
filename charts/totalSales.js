const totalSalesColor = "rgba(75, 192, 192, 1)";

const totalSalesData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        { x: 2, y: 9 },
        { x: 6, y: 3 },
        { x: 3, y: 4.5 },
        { x: 12, y: 6 },
        { x: 11, y: 9 },
        { x: 9, y: 8.5 },
        { x: 6, y: 3 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: totalSalesColor,
      borderWidth: 1,
    },
  ],
};

const totalSalesConfig = {
  type: "scatter",
  data: totalSalesData,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Total Sales",
          color: totalSalesColor,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Sales Agents",
        },
      },
    },
  },
};

const myChart3 = new Chart(
  document.getElementById("totalSales"),
  totalSalesConfig
);
