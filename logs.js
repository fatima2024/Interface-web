const logEntries = [
  {
    id: "LOG-1001",
    time: "09:14:22",
    source: "Assembly Line A",
    level: "Info",
    category: "Operations",
    message: "Production batch B-240 started successfully.",
  },
  {
    id: "LOG-1002",
    time: "09:16:08",
    source: "Packaging Unit",
    level: "Critical",
    category: "System",
    message: "Motor overload detected. Unit stopped automatically.",
  },
  {
    id: "LOG-1003",
    time: "09:18:41",
    source: "3D Printing Cell",
    level: "Warning",
    category: "Telemetry",
    message: "Temperature reached 44°C threshold.",
  },
  {
    id: "LOG-1004",
    time: "09:22:17",
    source: "Firewall Gateway",
    level: "Warning",
    category: "Security",
    message: "Multiple failed login attempts blocked.",
  },
  {
    id: "LOG-1005",
    time: "09:24:03",
    source: "Quality Control",
    level: "Info",
    category: "Inspection",
    message: "Inspection workflow completed for batch B-240.",
  },
  {
    id: "LOG-1006",
    time: "09:26:55",
    source: "Control Server",
    level: "Info",
    category: "System",
    message: "Backup sync completed.",
  },
  {
    id: "LOG-1007",
    time: "09:28:11",
    source: "Operator Console",
    level: "Warning",
    category: "Access",
    message: "Manual override requested for Packaging Unit.",
  },
  {
    id: "LOG-1008",
    time: "09:30:29",
    source: "Sensor Network",
    level: "Critical",
    category: "Telemetry",
    message: "Sensor cluster S-12 offline.",
  },
];

const logsContainer = document.getElementById("logsContainer");
const searchInput = document.getElementById("searchInput");
const levelFilter = document.getElementById("levelFilter");
const exportBtn = document.getElementById("exportBtn");

function getLevelBadgeClass(level) {
  const lower = level.toLowerCase();
  if (lower === "info") return "badge badge-info";
  if (lower === "warning") return "badge badge-warning";
  if (lower === "critical") return "badge badge-critical";
  return "badge";
}

function renderLogs(items) {
  if (!items.length) {
    logsContainer.innerHTML = `<div class="empty-state">No logs found for this filter.</div>`;
    lucide.createIcons();
    return;
  }

  logsContainer.innerHTML = items
    .map(
      (log) => `
      <div class="log-item">
        <div class="log-top">
          <div class="log-main">
            <div class="log-meta">
              <span class="log-id">${log.id}</span>
              <span class="${getLevelBadgeClass(log.level)}">${log.level}</span>
              <span class="badge badge-outline">${log.category}</span>
            </div>
            <p class="log-source">Source: ${log.source}</p>
            <p class="log-message">${log.message}</p>
          </div>
          <div class="log-time">${log.time}</div>
        </div>
      </div>
    `
    )
    .join("");

  lucide.createIcons();
}

function filterLogs() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedLevel = levelFilter.value.toLowerCase();

  const filtered = logEntries.filter((log) => {
    const matchesQuery =
      log.id.toLowerCase().includes(query) ||
      log.source.toLowerCase().includes(query) ||
      log.category.toLowerCase().includes(query) ||
      log.message.toLowerCase().includes(query);

    const matchesLevel =
      selectedLevel === "all" ? true : log.level.toLowerCase() === selectedLevel;

    return matchesQuery && matchesLevel;
  });

  renderLogs(filtered);
}

function exportLogs() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedLevel = levelFilter.value.toLowerCase();

  const filtered = logEntries.filter((log) => {
    const matchesQuery =
      log.id.toLowerCase().includes(query) ||
      log.source.toLowerCase().includes(query) ||
      log.category.toLowerCase().includes(query) ||
      log.message.toLowerCase().includes(query);

    const matchesLevel =
      selectedLevel === "all" ? true : log.level.toLowerCase() === selectedLevel;

    return matchesQuery && matchesLevel;
  });

  const content = JSON.stringify(filtered, null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "logs-export.json";
  a.click();

  URL.revokeObjectURL(url);
}

searchInput.addEventListener("input", filterLogs);
levelFilter.addEventListener("change", filterLogs);
exportBtn.addEventListener("click", exportLogs);

renderLogs(logEntries);
lucide.createIcons();