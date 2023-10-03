const lineChartData = {
  labels: ["Amazon", "Google", "ChartJS"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        {
          financials: "Amazon",

          url: "https://www.amazon.com",
          amount: { usd: 300, eur: 900 },
        },
        {
          financials: "Google",
          url: "https://www.google.com",

          amount: { usd: 800, eur: 250 },
        },
        {
          financials: "ChartJS",
          url: "https://www.chartjs.org",
          amount: { usd: 550, eur: 400 },
        },
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const lineChartConfig = {
  type: "pie",
  data: lineChartData,
  options: {
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
    },
    parsing: {
      key: "amount.usd",
    },
  },
};

const ctx10 = document.getElementById("linkPieChart");
const myChart10 = new Chart(ctx10, lineChartConfig);

function pieChartCanvas10(click) {
  const clickedSlice = myChart10.getElementsAtEventForMode(
    click,
    "nearest",
    { intersect: true },
    true
  );
  if (clickedSlice.length) {
    const pieSlice = clickedSlice[0];
    const link =
      myChart10.data.datasets[clickedSlice[0].datasetIndex].data[
        clickedSlice[0].index
      ].url;
    window.open(link);
  }
}

ctx10.onclick = pieChartCanvas10;
