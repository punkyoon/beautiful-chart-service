// weekly

var weekly = bb.generate({
  'data': {
    'columns': [
      [
        'data1',
        30,
        200,
        100,
        400,
        150,
        250
      ],
    ],
    'type': 'bar'
  },
  'bar': {
    'width': {
      'ratio': 0.5
    }
  },
  'bindto': '#chart'
});

var updateBar = function(data){
  weekly.load({
    columns: [
      data
    ]
  });
};

/*
setTimeout(function () {
	chart.load({
		columns: [
			['data3', 130, -150, 200, 300, -200, 100]
		]
	});
}, 1000);
*/