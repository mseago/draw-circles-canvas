'use strict';
if (this.FunWithCanvas === undefined) this.FunWithCanvas = {};

(function(context){

  function start() {

    var theCanvas = document.querySelector('#the-canvas');
    var ctx = theCanvas.getContext('2d');

    ctx.strokeStyle = 'rgb(243, 198, 0)';
    ctx.lineWidth = 10;
    ctx.fillStyle = 'rgb(243, 198, 0)';
    ctx.font = "85px sanserif";
    ctx.fillText("100", 35, 145);
    ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(100, 120, 70, 0, 2 * Math.PI);
    ctx.stroke();

    var circle2 = new Path2D();
    ctx.fillText("100", 235, 145);
    circle2.arc(300, 120, 70, 0, 2 * Math.PI);
    ctx.stroke(circle2);

    var circle3 = new Path2D();
    ctx.fillText("100", 35, 345);
    circle3.arc(100, 320, 70, 0, 2 * Math.PI);
    ctx.stroke(circle3);

    var circle5 = new Path2D();
    ctx.strokeStyle = 'rgba(114, 104, 51, .5)';
    circle5.arc(300, 320, 70, 0, 2 * Math.PI);
    ctx.stroke(circle5);

    var circle4 = new Path2D();

    ctx.fillText("37", 260, 345);
    ctx.beginPath();
    circle4.arc(300, 320, 70, 1.5 * Math.PI, .25 * Math.PI, false);
    ctx.fillStyle = 'rgb(243, 198, 0)';
    ctx.stroke(circle4);

    ctx.font = '15px sans-serif';
    ctx.fillStyle = 'white';
    ctx.fillText('EDIT', 80, 220);
    ctx.fillText('GFX', 280, 220);
    ctx.fillText('AUDIO', 70, 420);
    ctx.fillText('NERF BBALL', 255, 420)

  }
  context.start = start;
})(window.FunWithCanvas);
