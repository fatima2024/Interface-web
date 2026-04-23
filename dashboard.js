lucide.createIcons();

const productionCtx = document.getElementById("productionChart");
if (productionCtx) {
  new Chart(productionCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Output",
          data: [72, 85, 78, 92, 88, 67, 81],
          borderColor: "#1e293b",
          backgroundColor: "transparent",
          borderWidth: 3,
          tension: 0.35,
          pointRadius: 4,
        },
        {
          label: "Target",
          data: [80, 80, 80, 80, 80, 80, 80],
          borderColor: "#94a3b8",
          backgroundColor: "transparent",
          borderWidth: 2,
          tension: 0.35,
          borderDash: [6, 4],
          pointRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
}

const energyCtx = document.getElementById("energyChart");
if (energyCtx) {
  new Chart(energyCtx, {
    type: "doughnut",
    data: {
      labels: ["Cutting", "Assembly", "3D Print", "QA", "Packaging"],
      datasets: [
        {
          data: [28, 24, 19, 11, 18],
          backgroundColor: ["#1e293b", "#334155", "#64748b", "#94a3b8", "#cbd5e1"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "55%",
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

const qualityCtx = document.getElementById("qualityChart");
if (qualityCtx) {
  new Chart(qualityCtx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Defects",
          data: [3, 5, 2, 8],
          backgroundColor: "#1e293b",
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}