// Save data
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data
function getData(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Add new record
function addRecord(key, record) {
    let data = getData(key);

    // Auto-add unique ID if missing
    if (!record.id) {
        record.id = generateId();
    }

    data.push(record);
    saveData(key, data);
}

// Case-insensitive compare
function sameVillage(v1, v2) {
    return v1.trim().toLowerCase() === v2.trim().toLowerCase();
}

// Get villagers belonging to a worker's village
function getVillagersForWorker(worker) {
    let villagers = getData("villagers");
    return villagers.filter(v => sameVillage(v.village, worker.village));
}

// Get water sources belonging to a worker's village
function getWaterSourcesForWorker(worker) {
    let waterSources = getData("waterSources");
    return waterSources.filter(w => sameVillage(w.village, worker.village));
}

// Update villager report status
function updateReportStatus(reportId, newStatus, workerMessage) {
    let reports = JSON.parse(localStorage.getItem("villager_reports")) || [];

    reports = reports.map(r => {
        if (r.id === reportId) {
            r.status = newStatus;
            r.worker_message = workerMessage || "";
        }
        return r;
    });

    localStorage.setItem("villager_reports", JSON.stringify(reports));
}

// REQUIRED ADDITION → Unique ID generator
function generateId() {
    return Date.now() + Math.floor(Math.random() * 100000);
}
function generateId() {
    return Math.floor(Math.random() * 1000000000);
}

