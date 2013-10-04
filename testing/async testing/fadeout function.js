function fadeOut(node,duration,callback){
		if (typeof duration == "undefined") duration = 1000;
		if (node.style.opacity == "") node.style.opacity = 1;
		var timerHandle = 0;
		node.display = "inline";
		function reduceOpacity(){
			var newOpacity = node.style.opacity - 0.05;
			if (newOpacity < 0){
				clearInterval(timerHandle)
				node.style.opacity = 0;
				node.style.display = "none";
				if (callback)
					callback.call(node);
			} else {
				node.style.opacity = newOpacity;
			}
		}
		timerHandle = setInterval(reduceOpacity,(duration/20)); 
	}