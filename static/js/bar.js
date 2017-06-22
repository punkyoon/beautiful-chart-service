// weekly

var weekly;

var updateBar = function(data){
  weekly.load({
    columns: [
      data
    ]
  });
};

var clearBar = function(){
  weekly = bb.generate({
    'data': {
      'columns': [],
      'type': 'bar'
    },
    'bar': {
      'width': {
        'ratio': 0.5
      }
    },
    'bindto': '#chart'
  });
};

var destroyBar = function(){
  weekly.destroy();
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