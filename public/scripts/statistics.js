// google chart
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawChart);

// Current Stats (AY 2025-26): Branch-wise offers bar chart
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Branch", "Offers", { role: "style" }],
    ["CSE", 72, "color: #3b82f6"],
    ["CSE-AI", 41, "color: #10b981"],
    ["ECE", 30, "color: #6366f1"],
    ["ME", 32, "color: #f59e0b"],
    ["SM", 29, "color: #ec4899"],
    ["M.Tech", 24, "color: #8b5cf6"],
    ["M.Des", 4, "color: #06b6d4"],
  ]);

  var options = {
    title: "No. of Offers Branch-wise (2025-26)",
    titleTextStyle: {
      fontName: "Outfit",
      fontSize: 16,
      color: "#1a237e",
      bold: true
    },
    backgroundColor: "transparent",
    legend: { position: "none" },
    chartArea: { width: "85%", height: "70%" },
    bar: { groupWidth: "65%" },
    hAxis: {
      textStyle: { fontName: "Inter", fontSize: 11, color: "#64748b" },
      gridlines: { color: "transparent" }
    },
    vAxis: {
      textStyle: { fontName: "Inter", fontSize: 11, color: "#64748b" },
      gridlines: { color: "#f1f5f9" },
      baselineColor: "#e2e8f0"
    },
    animation: {
      startup: true,
      duration: 1200,
      easing: "out"
    }
  };

  var container = document.getElementById("branch-wise");
  if (!container) return;
  var chart = new google.visualization.ColumnChart(container);
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawMyChart);

// Current Stats (AY 2025-26): Course/degree-wise offers bar chart
function drawMyChart() {
  var data = google.visualization.arrayToDataTable([
    ["Course", "Offers", { role: "style" }],
    ["B.Tech", 204, "color: #3b82f6"],
    ["M.Tech", 24, "color: #8b5cf6"],
    ["M.Des", 4, "color: #06b6d4"],
  ]);

  var options = {
    title: "No. of Offers Batch-wise (2025-26)",
    titleTextStyle: {
      fontName: "Outfit",
      fontSize: 16,
      color: "#1a237e",
      bold: true
    },
    backgroundColor: "transparent",
    legend: { position: "none" },
    chartArea: { width: "85%", height: "70%" },
    bar: { groupWidth: "55%" },
    hAxis: {
      textStyle: { fontName: "Inter", fontSize: 11, color: "#64748b" },
      gridlines: { color: "transparent" }
    },
    vAxis: {
      textStyle: { fontName: "Inter", fontSize: 11, color: "#64748b" },
      gridlines: { color: "#f1f5f9" },
      baselineColor: "#e2e8f0"
    },
    animation: {
      startup: true,
      duration: 1200,
      easing: "out"
    }
  };

  var container = document.getElementById("degree-wise");
  if (!container) return;
  var chart = new google.visualization.ColumnChart(container);
  chart.draw(data, options);
}

// Past Stats: Yearly Placement Statistics trend chart (all years including 2025-26)
google.charts.setOnLoadCallback(drawPlacementStats);
function drawPlacementStats() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Placement Percentage', { role: 'style' }],
    ['2022-2023', 65.5, '#304ffe'],
    ['2023-2024', 61.9, '#00ffe0'],
    ['2024-2025', 63, '#1a237e'],
    ['2025-2026', 67.7, '#3b82f6'],
  ]);

  var options = {
    title: 'Yearly Placement Statistics Trend',
    titleTextStyle: {
      fontName: 'Outfit',
      color: '#1a237e',
      fontSize: 18,
      bold: true
    },
    backgroundColor: 'transparent',
    legend: { position: 'none' },
    chartArea: { width: '85%', height: '70%' },
    bar: { groupWidth: '50%' },
    vAxis: {
      title: 'Placement Percentage',
      titleTextStyle: { fontName: 'Inter', fontSize: 12, italic: false, color: '#475569' },
      minValue: 0,
      maxValue: 100,
      format: '#\'%\'',
      textStyle: { fontName: 'Inter', fontSize: 11, color: '#64748b' },
      gridlines: { color: '#f1f5f9' },
      baselineColor: '#e2e8f0'
    },
    hAxis: {
      title: 'Academic Year',
      titleTextStyle: { fontName: 'Inter', fontSize: 12, italic: false, color: '#475569' },
      textStyle: { fontName: 'Inter', fontSize: 11, color: '#64748b' }
    },
    animation: {
      startup: true,
      duration: 1200,
      easing: 'out'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('placement-stats'));
  chart.draw(data, options);
}

// Add window resize handler
window.addEventListener('resize', function () {
  if (document.getElementById('placement-stats')) drawPlacementStats();
  if (document.getElementById('branch-wise')) drawChart();
  if (document.getElementById('degree-wise')) drawMyChart();
});
