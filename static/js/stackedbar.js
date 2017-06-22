// daily

var daily;

var updateStackedBar = function(data1, data2, data3){
  daily.groups([[data1[0], data2[0], data3[0]]]);

  daily.load({
    columns: [
      data1, data2, data3
    ]
  });
};

var clearStackedBar = function(){
  daily = bb.generate({
    'data': {
      'columns': [],
      'type': 'bar',
      'groups': []
    },
    'grid': {
      'y': {
        'lines': [
          {
            'value': 0
          }
        ]
      }
    },
    'bindto': '#chart'
  });
};

var destroyStackedBar = function(){
  daily.destroy();
};

/*
setTimeout(function () {
	chart.groups([['data1', 'data2', 'data3']])
}, 1000);

setTimeout(function () {
	chart.load({
		columns: [['data4', 100, -50, 150, 200, -300, -100]]
	});
}, 1500);

setTimeout(function () {
	chart.groups([['data1', 'data2', 'data3', 'data4']])
}, 2000);
*/