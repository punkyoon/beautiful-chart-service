var _mode = 1

$(document).ready(function(){
    var sock = io.connect('http://localhost:8000');

    clearDonut();
    
    sock.on('draw', function(data){
        if (_mode===1){
            live_data = data['live'];
            updateDonut(live_data['Play'], live_data['Rest'], live_data['Active']);
        }
        else if (_mode===2){
            daily_data = data['daily'];
            updateStackedBar(daily_data['Play'], daily_data['Rest'], daily_data['Active']);
        }
        else{
            weekly_data = data['weekly'];
            updateBar(weekly_data);
        }
    });

    // change mode
    $('#live').on('click', function(){
        // donut.js
        _mode = 1
        clearDonut();
    });

    $('#daily').on('click', function(){
        // stacked_bar.js
        _mode = 2
        clearStackedBar();
    });
    
    $('#weekly').on('click', function(){
        // bar.js
        _mode = 3
        clearBar();
    });
});