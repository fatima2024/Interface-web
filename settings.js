lucide.createIcons();

const factoryName = document.getElementById("factoryName");
const timezone = document.getElementById("timezone");
const operationsNote = document.getElementById("operationsNote");

const darkMode = document.getElementById("darkMode");
const manualApproval = document.getElementById("manualApproval");
const alertsEnabled = document.getElementById("alertsEnabled");
const emailReports = document.getElementById("emailReports");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const auditBtn = document.getElementById("auditBtn");
const messageBox = document.getElementById("messageBox");

const defaultSettings = {
  factoryName: "Micro-Factory Site A",
  timezone: "europe-paris",
  operationsNote:
    "Primary site configured for batch manufacturing, live telemetry enabled and operator-level access active.",
  darkMode: false,
  manualApproval: false,
  alertsEnabled: true,
  emailReports: true,
};

function showMessage(text) {
  messageBox.textContent = text;
  messageBox.classList.remove("hidden");

  setTimeout(() => {
    messageBox.classList.add("hidden");
  }, 2500);
}

function saveSettings() {
  const settings = {
    factoryName: factoryName.value,
    timezone: timezone.value,
    operationsNote: operationsNote.value,
    darkMode: darkMode.checked,
    manualApproval: manualApproval.checked,
    alertsEnabled: alertsEnabled.checked,
    emailReports: emailReports.checked,
  };

  localStorage.setItem("microFactorySettings", JSON.stringify(settings));
  showMessage("Settings saved successfully.");
}

function loadSettings() {
  const saved = localStorage.getItem("microFactorySettings");
  if (!saved) return;

  const settings = JSON.parse(saved);

  factoryName.value = settings.factoryName ?? defaultSettings.factoryName;
  timezone.value = settings.timezone ?? defaultSettings.timezone;
  operationsNote.value = settings.operationsNote ?? defaultSettings.operationsNote;
  darkMode.checked = settings.darkMode ?? defaultSettings.darkMode;
  manualApproval.checked = settings.manualApproval ?? defaultSettings.manualApproval;
  alertsEnabled.checked = settings.alertsEnabled ?? defaultSettings.alertsEnabled;
  emailReports.checked = settings.emailReports ?? defaultSettings.emailReports;
}

function resetSettings() {
  factoryName.value = defaultSettings.factoryName;
  timezone.value = defaultSettings.timezone;
  operationsNote.value = defaultSettings.operationsNote;
  darkMode.checked = defaultSettings.darkMode;
  manualApproval.checked = defaultSettings.manualApproval;
  alertsEnabled.checked = defaultSettings.alertsEnabled;
  emailReports.checked = defaultSettings.emailReports;

  localStorage.removeItem("microFactorySettings");
  showMessage("Settings reset to default.");
}

function reviewAuditTrail() {
  showMessage("Audit trail opened.");
}

saveBtn.addEventListener("click", saveSettings);
resetBtn.addEventListener("click", resetSettings);
auditBtn.addEventListener("click", reviewAuditTrail);

loadSettings();