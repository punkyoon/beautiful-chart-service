// weekly

var chart = bb.generate({
  "data": {
    "columns": [
      [
        "data1",
        30,
        200,
        100,
        400,
        150,
        250
      ],
      [
        "data2",
        130,
        100,
        140,
        200,
        150,
        50
      ]
    ],
    "type": "bar"
  },
  "bar": {
    "width": {
      "ratio": 0.5
    }
  },
  "bindto": "#BarChart"
});

setTimeout(function () {
	chart.load({
		columns: [
			['data3', 130, -150, 200, 300, -200, 100]
		]
	});
}, 1000);