

// Sales Overview Chart
Highcharts.chart('sales-overview-chart', {
    chart: {
        type: 'column',
        animation: false
    },
    title: {
        text: 'Sales Overview (January - December)'
    },
    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount (k)'
        },
        labels: {
            formatter: function () {
                return this.value + 'k';
            }
        }
    },
    tooltip: {
        shared: true,
        useHTML: true,
        pointFormatter: function () {
            return `<span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${this.y}k</b><br/>`;
        }
    },
    plotOptions: {
        column: {
            borderWidth: 0
        },
        series: {
            animation: false
        }
    },
    accessibility: {
        enabled: false
    },
    series: [
        { name: 'Profit', data: [50, 60, 80, 100, 120, 150, 130, 140, 180, 160, 90, 50], color: '#287f71' },
        { name: 'Expense', data: [40, 50, 70, 90, 110, 140, 120, 130, 170, 150, 80, 40], color: '#dee2e6' }
    ]
});


// Top Selling Themes Chart
Highcharts.chart('Top-selling-themes-chart', {
    chart: { type: 'column' },
    title: { text: 'Top Selling Themes' },
    xAxis: {
        categories: ['Themeforest', 'MonirSoft', 'AdminKit', 'MaterialDash', 'ITSolutions', 'AazzTech'],
        title: { text: 'Themes' }
    },
    yAxis: { min: 0, title: { text: 'Themes Sold' } },
    tooltip: { shared: true, useHTML: true, pointFormat: '<b>{point.y} Themes</b>' },
    plotOptions: { column: { colorByPoint: true, colors: ['#FF9800', '#4CAF50', '#2196F3', '#9C27B0', '#F44336'], borderWidth: 0 } },
    accessibility: { enabled: false },
    series: [{
        name: 'Sales',
        data: [150, 300, 200, 120, 180, 100]
    }]
});


