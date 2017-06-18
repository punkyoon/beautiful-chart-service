$(document).ready(function(){
    var _mode = 1
    var sock = io.connect('http://localhost:8000');
    //var sock = io.connect('http://52.231.35.33');
    
    sock.on('draw', function(data){
        if (_mode===1){
            console.log('mode 1');
            //updatePie();
        }
        else if (_mode===2){
            console.log('mode 2');
            //updateStackedBar();
        }
        else{
            console.log('mode 3');
            //updateBar();
        }
    });

    // change mode
    $('#live').on('click', function(){
        // pie.js
        _mode = 1
        sock.emit('change', {'mode': 1});
    });

    $('#daily').on('click', function(){
        // stacked_bar.js
        _mode = 2
        sock.emit('change', {'mode': 2});
    });
    
    $('#weekly').on('click', function(){
        // bar.js
        _mode = 3
        sock.emit('change', {'mode': 3});
    });
});
