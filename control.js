lucide.createIcons();

const controlSignalsCtx = document.getElementById("controlSignalsChart");

if (controlSignalsCtx) {
  new Chart(controlSignalsCtx, {
    type: "line",
    data: {
      labels: ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50"],
      datasets: [
        {
          label: "Commands Sent",
          data: [18, 22, 19, 26, 21, 24],
          borderColor: "#1e293b",
          backgroundColor: "transparent",
          borderWidth: 3,
          tension: 0.35,
          pointRadius: 4,
        },
        {
          label: "Acknowledged",
          data: [17, 22, 18, 25, 20, 24],
          borderColor: "#94a3b8",
          backgroundColor: "transparent",
          borderWidth: 2,
          tension: 0.35,
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

document.querySelectorAll(".start-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Start command sent.");
  });
});

document.querySelectorAll(".stop-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Stop command sent.");
  });
});

document.querySelector(".danger-action")?.addEventListener("click", () => {
  alert("Emergency pause activated.");
});

document.querySelectorAll(".secondary-action").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`${button.textContent} executed.`);
  });
});