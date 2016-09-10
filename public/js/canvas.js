(function(){
	"use strict";
	console.log(session_id);
	var attr = {
		"id":"coolcanvas",
		"width":300,
		"height":300
	}

	var canvas = document.createElement("canvas");
	for (var key in attr)
	{
	canvas.setAttribute(key,attr[key]);
	}
	document.getElementById('testcanvas').appendChild(canvas);

	function neatostuff(w,h)
	{
		console.log(w,h);
		var text = "Hey Dude!";
		var newcanvas = document.getElementById("coolcanvas");
		var ctx = newcanvas.getContext('2d');
		console.log(ctx);
		ctx.textBaseline="middle";
		ctx.textAlign = "center";
		ctx.font = "34px 'Helvetica'";
		ctx.fillText(text,w/2,h/2);
		return newcanvas.toDataURL();
	}
	function contactPhp()
	{
		var data =
		{
			userid:session_id,
			basestring:neatostuff(attr['width'],attr['height'])
		}
		var finalanswer;
		var formatted = "userid="+encodeURIComponent(data.userid)+"&datastring="+encodeURIComponent(data.basestring);
		console.log(data,formatted);
		var xhttp = new XMLHttpRequest();
		xhttp.open('POST','/testforcanvas.php', true);
		xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhttp.send(formatted);
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4)
			{
				finalanswer = JSON.parse(xhttp.responseText);
				console.log(finalanswer);
			}
		}

	}
	contactPhp();
})();