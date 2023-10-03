const temperatureBarData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Temperature in C",
      data: [
        [3, 11],
        [5, 11],
        [7, 14],
        [4, 10],
        [2, 18],
        [9, 2],
      ],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};

const temperatureBarConfig = {
  type: "bar",
  data: temperatureBarData,
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart5 = new Chart(
  document.getElementById("temperatureBar"),
  temperatureBarConfig
);
