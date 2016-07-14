window.onload = init;var $log = $("#log"),	html = $.parseHTML("https://yandex.ru/maps/"),	nodeNames = [];var map;var ctxMap;var gameWidth = 800;var gameHeight = 600;var trafficImage = new Image();trafficImage.src = "img/yellow.png";var isPlaying;var requestAnimFrame = window.requestAnimationFrame ||						window.webkitRequestAnimationFrame ||						window.mozRequestAnimationFrame ||						window.oRequestAnimationFrame ||						window.msRequestAnimationFrame;function init(){	map = document.getElementById("map");	ctxMap = map.getContext("2d");	map.width = gameWidth;	map.height = gameHeight;trafficImage.src = "img/yellow.png";	$.getJSON({          type: 'GET',           url: 'https://www.yandex.ru/maps',          dataType: 'html',          success: function(data) {            //cross platform xml object creation from w3schools            try //Internet Explorer              {              xmlDoc=new ActiveXObject("Microsoft.XMLDOM");              xmlDoc.async="false";              xmlDoc.loadXML(data);              }            catch(e)              {              try // Firefox, Mozilla, Opera, etc.                {                parser=new DOMParser();                xmlDoc=parser.parseFromString(data,"text/xml");                }              catch(e)                {                alert(e.message);                return;                }              }            alert(xmlDoc.getElementsByTagName("div")[0].childNodes[0].nodeValue);          }    }); 	// var req = new XMLHttpRequest(); 	// req.open('GET', 'yandex.ru', false); 	// req.send(null); 	// if(req.status==200) {}	startLoop();}function loop(){	if(isPlaying)	{		draw();		update();		requestAnimFrame(loop);	}}function startLoop(){	isPlaying = true;	loop();}function stopLoop(){	isPlaying = false;}function draw(){	drawTraffic();}function update(){	}function drawTraffic() {	var w = 510	var h = 600	ctxMap.drawImage(trafficImage, 0, 0, w, h,		gameWidth/2-w/2, gameHeight/2-h/2, w, h);}//Objectsfunction Player(){}