$(document).ready(function(){
    var _mode = 1
    var sock = io.connect('http://localhost:8000');
    //var sock = io.connect('http://52.231.35.33');

    clearDonut();
    
    sock.on('draw', function(data){
        console.log('data'+ data);

        if (_mode===1){
            console.log('mode 1');
            live_data = data['live'];
            updateDonut(live_data['Play'], live_data['Rest'], live_data['Active']);
        }
        else if (_mode===2){
            console.log('mode 2');
            daily_data = data['daily'];
            updateStackedBar(daily_data['Play'], daily_data['Rest'], daily_data['Active']);
        }
        else{
            console.log('mode 3');
            weekly_data = data['weekly'];
            updateBar(weekly_data);
        }
    });

    // change mode
    $('#live').on('click', function(){
        // donut.js
        _mode = 1

        clearDonut();

        sock.emit('change', {'mode': 1});
    });

    $('#daily').on('click', function(){
        // stacked_bar.js
        _mode = 2

        clearStackedBar();

        sock.emit('change', {'mode': 2});
    });
    
    $('#weekly').on('click', function(){
        // bar.js
        _mode = 3
        
        clearBar();

        sock.emit('change', {'mode': 3});
    });
});
