
var localeTimeStringOptions = {
	year: "numeric", month: "numeric", day: "numeric", 
	hour: "2-digit", minute: "2-digit", second: "2-digit",
	timeZoneName: "short"
};

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		var timestamps = document.querySelectorAll(".column-timestamp");
		for (var i = 0; i < timestamps.length; ++i) {
			var elem = timestamps[i];
			var text = elem.innerText;
			if (!elem.hasBeenConverted) {				
				var date = new Date(text);
				var localDateString = date.toLocaleTimeString(undefined, localeTimeStringOptions).replace(/,/g,"");
				
				elem.innerText = localDateString;
				elem.title = text;
				elem.hasBeenConverted = true;
			}			
		}
	}
}, 1000);
