$(document).ready(function(){
    var sock = io.connect('http://localhost:8000');
    sock.on('draw', function(data){
        if($('#changeButton').html() == 'stop'){
            // get data
            rest = data['rest_time'];
            walk = data['walk_time'];
            fast_walk = data['fast_walk_time'];
            e = data['e'];
            
            // updating chart (live)
            updateChart(rest, walk, fast_walk);
            updateChart2(e);
        }
    });
    // change mode
    $('#changeButton').on('click', function(){
        // change mode: stop -> start
        if($('#changeButton').html() == 'start'){
            $('#changeButton').html('stop');
            sock.emit('change mode', {'mode': 'start'});
        }
        // change mode: start -> stop
        else{
            $('#changeButton').html('start');
            sock.emit('change mode', {'mode': 'stop'});
        }
    });
});