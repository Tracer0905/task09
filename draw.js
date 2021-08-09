//获取对象
var mycanvas = document.getElementById("mycanvas");
var color1 = document.getElementById("color1");
var range1 = document.getElementById("range1");
var btn = document.getElementsByClassName("btn")[0];
var contxt = mycanvas.getContext("2d");
btn.onclick = function () {
   contxt.clearRect(0, 0, 1200, 660);
}
var flag = false;
var x = 0,
   y = 0;
// 鼠标点下事件
mycanvas.onmousedown = function (event) {
   flag = true;
   // 获取鼠标点下的开始位置
   var x = event.clientX - mycanvas.offsetLeft;
   var y = event.clientY - mycanvas.offsetTop;
   contxt.beginPath(); // 开始新建路径
   contxt.strokeStyle = color1.value; // 获得颜色赋值给画笔
   contxt.lineCap = "round";
   contxt.lineWidth = range1.value; // 获得画笔宽度赋值给画笔
   contxt.moveTo(x, y); // 开始位置
}
// 鼠标移动事件
mycanvas.onmousemove = function (event) {
   // 获取鼠标在移动的位置
   var mX = event.clientX - mycanvas.offsetLeft;
   var mY = event.clientY - mycanvas.offsetTop;
   if (flag) {
      contxt.lineTo(mX, mY); // 移动途中和结束位置
      contxt.stroke(); // 结束渲染画布
   }
}
// 鼠标松开事件
mycanvas.onmouseup = function () {
   flag = false;
}