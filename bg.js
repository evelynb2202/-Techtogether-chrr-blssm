//gets from storage or initializes array of past moods

var moodHistory = new Array();

chrome.storage.local.get(["moodHistoryStored"], function(result) {
	if (typeof result.moodHistoryStored !== 'undefined') {
		moodHistory = result.moodHistoryStored;
		console.log(moodHistory);
	} else {
		console.log("hist initd")
	}
});
console.log("a");
console.log(moodHistory);

console.log("b");

//interval between asking for mood

var interval = 86400000; // 24h in milliseconds

chrome.storage.local.get(["intervalStored"], function(result) {
	if (typeof result.intervalStored !== 'undefined') {
		interval = result.intervalStored;
		console.log(interval);
	} else {
		console.log("int initd")
	}
	chrome.storage.local.set({"intervalStored": interval});
});

//last time asked, if none found, defaults to date decades ago
var lastAsked = 0; //Jan 1, 1970, Unix epoch

chrome.storage.local.get(["lastAskedStored"], function(result) {
	if (typeof result.lastAskedStored !== 'undefined') {
		lastAsked = result.lastAskedStored;
		console.log(lastAsked);
	} else {
		console.log("lastask inited")
	}
});

//listen for messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	var d = new Date();

    if (typeof request.answer1 !== 'undefined') {
    	
	    lastAsked = d.getTime();
	    chrome.storage.local.set({"lastAskedStored": lastAsked});
	    moodHistory.push({"time":lastAsked, "mood":request.answer1});
    	chrome.storage.local.set({"moodHistoryStored": moodHistory});
    	console.log("answer noted");
	}

    if (typeof request.show !== 'undefined') {
    	if (lastAsked + interval < d.getTime()) {
    		sendResponse({show:true});
    		console.log(lastAsked);
    		console.log(d.getTime())
    	} else {
    		sendResponse({show:false});
    		console.log("show: f")
    	}
    }
 });