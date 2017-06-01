// weekly
var bar = Highcharts.chart('container', {
    title: {
        text: 'Weekly Report'
    },
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [{
        type: 'column',
        name: 'active-mass',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 177.0],
        showInLegend: false,
    }]
});

function bar_update(data){
    bar.update({
        series: [{
            data: data
        }]
    })
}

/*
$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});
*/
