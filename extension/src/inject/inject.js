

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		var timestamps = document.querySelectorAll(".column-timestamp");
		for (var i = 0; i < timestamps.length; ++i) {
			var elem = timestamps[i];
			var text = elem.innerText;
			if (text.indexOf("UTC") != -1) {
				elem.innerText = new Date(text).toLocaleString();
			}			
		}
	}
}, 1000);
