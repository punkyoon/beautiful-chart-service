var percent = 55;


var pie=d3.layout.pie()
    .value(function(d){return d})
    .sort(null);

var w=300,h=320;

var outerRadius=(w/2)-10;
var innerRadius=outerRadius-8;


var color = ['#ec1561','#2a3a46','#202b33'];

var arc=d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0)
    .endAngle(2*Math.PI);

//The circle is following this
var arcDummy=d3.svg.arc()
    .innerRadius((outerRadius-innerRadius)/2+innerRadius)
    .outerRadius((outerRadius-innerRadius)/2+innerRadius)
    .startAngle(0);


var arcLine=d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0);

var svg=d3.select("#chart")
    .append("svg")
    .attr({
        width:w,
        height:h,
        class:'shadow'
    }).append('g')
    .attr({
        transform:'translate('+w/2+','+h/2+')'
    });


//background
var path=svg.append('path')
    .attr({
        d:arc
    })
    .style({
        fill:color[1]
    });


var pathForeground=svg.append('path')
    .datum({endAngle:0})
    .attr({
        d:arcLine
    })
    .style({
        fill:color[0]
    });

//Dummy Arc for Circle
var pathDummy=svg.append('path')
    .datum({endAngle:0})
    .attr({
        d:arcDummy
    }).style({
        fill:color[0]
    });

var endCircle=svg.append('circle')
    .attr({
        r:12,
        transform:'translate(0,'+ (-outerRadius+15) +')'
    })
    .style({
        stroke:color[0],
        'stroke-width':8,
        fill:color[2]
    });

    var middleTextCount=svg.append('text')
        .datum(0)
        .text(function(d){
        return d+'%';
    })

    .attr({
        class:'middleText',
        'text-anchor':'middle',
        dy:25,
        dx:0
    })
    .style({
        fill:'#ec1561',
        'font-size':'80px'
    });


var arcTweenOld=function(transition, percent,oldValue) {
    transition.attrTween("d", function (d) {
            var newAngle=(percent/100)*(2*Math.PI);

            var interpolate = d3.interpolate(d.endAngle, newAngle);

            var interpolateCount = d3.interpolate(oldValue, percent);


            return function (t) {
            d.endAngle = interpolate(t);
            var pathForegroundCircle = arcLine(d);

            middleTextCount.text(Math.floor(interpolateCount(t))+'%');

            var pathDummyCircle = arcDummy(d);
            var coordinate = pathDummyCircle.split("L")[1].split("A")[0];

            endCircle.attr('transform', 'translate(' + coordinate+ ')');

            return pathForegroundCircle;
        };
    });
};

var oldValue=0;

var animate=function(){
    pathForeground.transition()
        .duration(750)
        .ease('cubic')
        .call(arcTweenOld,percent,oldValue);

    oldValue=percent;
    percent=(Math.random() * 60) + 20;
    setTimeout(animate,3000);
};

setTimeout(animate,0);