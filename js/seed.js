// js/seed.js
(function seed() {
    // Seed workers
    let workers = localStorage.getItem("workers");
    if (!workers) {
        const defaultWorkers = [
            { username: "worker1", password: "worker123", name: "Health Worker A", area: "North Village" },
            { username: "worker2", password: "worker123", name: "Health Worker B", area: "East Village" }
        ];
        localStorage.setItem("workers", JSON.stringify(defaultWorkers));
    }

    // Seed admins
    let admins = localStorage.getItem("admins");
    if (!admins) {
        const defaultAdmins = [
            { username: "admin", password: "admin123", name: "System Admin" }
        ];
        localStorage.setItem("admins", JSON.stringify(defaultAdmins));
    }

    // Seed sample villager reports (only if none)
    if (!localStorage.getItem("villager_reports")) {
        const sampleReports = [
            { user: "Raju", date: new Date().toLocaleString(), symptoms: { fever:true, diarrhea:true, vomiting:false, watery_stool:true, water_quality:"bad"}, risk: "High Risk", area: "North Village" },
            { user: "Sita", date: new Date().toLocaleString(), symptoms: { fever:false, diarrhea:false, vomiting:false, watery_stool:false, water_quality:"good"}, risk: "Low Risk", area: "East Village" }
        ];
        localStorage.setItem("villager_reports", JSON.stringify(sampleReports));
    }

    // Seed admin alerts (empty by default)
    if (!localStorage.getItem("admin_alerts")) {
        localStorage.setItem("admin_alerts", JSON.stringify([]));
    }

    // Seed water_sources (for workers to mark)
    if (!localStorage.getItem("water_sources")) {
        const sources = [
            { id: 1, name: "Tube well - North", area: "North Village", status: "Unknown", lastChecked: null, checkedBy: null },
            { id: 2, name: "Pond - East", area: "East Village", status: "Unknown", lastChecked: null, checkedBy: null }
        ];
        localStorage.setItem("water_sources", JSON.stringify(sources));
    }
})();
