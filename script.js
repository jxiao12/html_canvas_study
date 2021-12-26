// Thre Rending Context

// var canvas = document.querySelector('#tutorial');
// //use 2D
// // check if it is support
// if (canvas.getContext){
//   var ctx = canvas.getContext('2d');
//   // drawing code here
// } else {
//   return;
//   // canvas-unsupported code here
// }


//  example draw Rectangle
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) {
      return;
    }
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);
}
draw();
