const departmentDatasets2 = [
  "Sales Department",
  "Marketing Department",
  "HR Department",
  "IT Department",
];
const cost2 = [300, 900, 600, 170];
const budget2 = [10000, 3000, 5000, 8000];
const tax2 = [900, 300, 800, 900];

const departmentInfo2 = departmentDatasets2.map((department, index) => {
  let departmentDataset = {};
  departmentDataset.department = department;
  departmentDataset.financials = {};
  departmentDataset.financials.cost = cost2[index];
  departmentDataset.financials.budget = budget2[index];
  departmentDataset.financials.tax = tax2[index];
  return departmentDataset;
});

const horizontalBarData = {
  datasets: [
    {
      label: "Tax",
      data: departmentInfo2,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const horizontalBarConfig = {
  type: "bar",
  data: horizontalBarData,
  options: {
    parsing: {
      yAxisKey: "department",
      xAxisKey: "financials.tax",
    },
    borderWidth: 1,
    indexAxis: "y",
    scales: {},
  },
};

const myChart2 = new Chart(
  document.getElementById("horizontalBar"),
  horizontalBarConfig
);

function toggleFinancials(financials) {
  myChart2.config.options.parsing.xAxisKey = `financials.${financials}`;
  myChart2.update();
}
