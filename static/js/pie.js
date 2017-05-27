// for live
// Build the chart
var pie_active = Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Active'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'value',
        colorByPoint: true,
        data: [{
            name: 'Active',
            y: 56.33,
            sliced: true,
            selected: true
        }, {
            name: 'Rest',
            y: 24.03,
        }]
    }]
});

var pie_play = Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Play'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'value',
        colorByPoint: true,
        data: [{
            name: 'Play',
            y: 56.33,
            sliced: true,
            selected: true
        }, {
            name: 'Rest',
            y: 24.03,
        }]
    }]
});