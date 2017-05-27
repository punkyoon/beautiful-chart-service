// for daily
var stacked_bar = Highcharts.chart('container', {
    chart:{
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['0-6', '6-12', '12-18', '18-24']
    },
    yAxis: {
        min: 0,
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    series: [{
        name: 'Play',
        data: [5, 3, 4, 7]
    }, {
        name: 'Rest',
        data: [2, 2, 3, 2]
    }, {
        name: 'Active',
        data: [3, 4, 4, 2]
    }]
});