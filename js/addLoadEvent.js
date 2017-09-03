/*---------------------当前时间----------------------*/
function two_char(n) {
	return n >= 10 ? n : "0" + n;
}
function time_fun() {
	var mydate = new Date();
	var sec=mydate.getSeconds();     //setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
	setInterval(function () {
		sec++;
		var date = new Date();      //Date 对象会自动把当前日期和时间保存为其初始值     
		date.setSeconds(sec);
		var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
		document.getElementById("mytime").innerText = date.getFullYear()+"年" +(date.getMonth()+1)+"月" +date.getDate()+"日" + " " +two_char(h) + ":" + two_char(m) + ":" + two_char(s);
	}, 1000);       //js返回的月份是从0开始算起的，0表示1月，11表示12月
}

/*---------------------添加多个onload事件----------------------*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(time_fun); 
