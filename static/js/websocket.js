$(document).ready(function(){
    var sock = io.connect('http://localhost:8000');
    //var sock = io.connect('http://');
    
    sock.on('chageMode', function(data){
        // updating chart (live)
        //updateChart(rest, walk, fast_walk);
        //updateChart2(e);
    });
    // change mode
    $('#live').on('click', function(){
        //dev..
    });

    $('#daily').on('click', function(){
        //dev..
    });
    
    $('#weekly').on('click', function(){
        //dev..
    });
});
