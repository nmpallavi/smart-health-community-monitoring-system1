// =========================
// RISK CHART (Pie Chart)
// =========================
let riskChartInstance = null; // required for Chart.js v4

function drawRiskChart(ctx, reports) {
    if (!reports) return;

    let high = 0, medium = 0, low = 0;

    reports.forEach(r => {
        if (r.risk === "High Risk") high++;
        else if (r.risk === "Medium Risk") medium++;
        else if (r.risk === "Low Risk") low++;
    });

    if (riskChartInstance) {
        riskChartInstance.destroy();
    }

    riskChartInstance = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["High Risk", "Medium Risk", "Low Risk"],
            datasets: [{
                data: [high, medium, low],
                backgroundColor: ["#f82828ff", "orange", "#1bd12eff"]
            }]
        },
        options: {
            responsive: true,

            // 👇 Added Animation
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 1200,
                easing: "easeOutBounce"
            }
        }
    });
}



// ===============================
// WATER QUALITY STATUS (Bar Chart)
// ===============================
let waterStatusChart = null;

function drawWaterStatusChart(ctx, sources) {
    if (!sources || sources.length === 0) {
        console.warn("No water source data found for chart!");
        return;
    }

    let safe = 0, unsafe = 0, unknown = 0;

    sources.forEach(s => {
        if (s.status === "Safe") safe++;
        else if (s.status === "Unsafe") unsafe++;
        else unknown++;
    });

    if (waterStatusChart) waterStatusChart.destroy();

    waterStatusChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Safe", "Unsafe", "Unknown"],
            datasets: [{
                label: "Water Sources Count",
                data: [safe, unsafe, unknown],
                backgroundColor: ["#4CAF50", "#E53935", "#FB8C00"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            // 👇 Added Animation
            animation: {
                duration: 1300,
                easing: "easeOutQuart",

                // slide from bottom effect
                delay: function(context) {
                    return context.dataIndex * 200;
                }
            }
        }
    });
}



let areaWiseChart = null;

function drawAreaWiseWaterChart(ctx, sources) {
    if (!sources || sources.length === 0) return;

    let areas = {};

    sources.forEach(s => {
        if (!areas[s.area]) {
            areas[s.area] = { Safe: 0, Unsafe: 0, Unknown: 0 };
        }
        areas[s.area][s.status] = (areas[s.area][s.status] || 0) + 1;
    });

    const labels = Object.keys(areas);
    const safeData = labels.map(a => areas[a].Safe);
    const unsafeData = labels.map(a => areas[a].Unsafe);
    const unknownData = labels.map(a => areas[a].Unknown);

    if (areaWiseChart) areaWiseChart.destroy();

    areaWiseChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Safe",
                    data: safeData,
                    backgroundColor: "#4CAF50"
                },
                {
                    label: "Unsafe",
                    data: unsafeData,
                    backgroundColor: "#E53935"
                },
                {
                    label: "Unknown",
                    data: unknownData,
                    backgroundColor: "#FB8C00"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true },
                y: { stacked: true }
            },

            // 👇 Added Animation
            animation: {
                duration: 1400,
                easing: "easeInOutCubic"
            }
        }
    });
}
