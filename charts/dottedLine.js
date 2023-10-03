const down8 = (ctx, value) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

const dottedLineData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      tension: 0.4,
      segment: {
        borderColor: (ctx) =>
          down8(ctx, "rgba(255, 99, 132, 1)") || "rgba(75, 192, 192, 1)",
        borderDash: (ctx) => down8(ctx, [2, 10]),
      },
    },
  ],
};

const dottedLineConfig = {
  type: "line",
  data: dottedLineData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart8 = new Chart(
  document.getElementById("dottedLine"),
  dottedLineConfig
);
