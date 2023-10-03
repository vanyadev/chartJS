const week11 = [];
const weekDatapoints11 = [];

for (let i = 1; i <= 52; i++) {
  week11.push(`Week ${i}`);
  weekDatapoints11.push(i);
}

const weeklyChartData = {
  labels: week11,
  datasets: [
    {
      label: "Weekly Data",
      data: weekDatapoints11,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const weeklyChartConfig = {
  type: "bar",
  data: weeklyChartData,
  options: {
    scales: {
      x: {
        min: 8,
        max: 14,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart11 = new Chart(
  document.getElementById("weeklyChart"),
  weeklyChartConfig
);

function weekData(start, end) {
  const startScale = myChart11.config.options.scales.x.min + start;
  const endScale = myChart11.config.options.scales.x.max + end;
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");

  myChart11.config.options.scales.x.min = startScale;
  myChart11.config.options.scales.x.max = endScale;

  previousButton.disabled = false;
  nextButton.disabled = false;

  if (startScale < 0) {
    myChart11.config.options.scales.x.min = 0;
    myChart11.config.options.scales.x.max = 6;
    previousButton.disabled = true;
  }

  if (endScale > week11.length) {
    myChart11.config.options.scales.x.min = week11.length - 6;
    myChart11.config.options.scales.x.max = week11.length - 1;
    nextButton.disabled = true;
  }

  myChart11.update();
}
