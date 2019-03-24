// //gets from storage or initializes array of past moods
// if(chrome.storage.local.get(["moodHistoryStored"]) == true) {
// 	var moodHistory = chrome.storage.local.get(["moodHistoryStored"]);
// } else {
// 	var moodHistory = new Array();
// }

// //interval between asking for mood
// if(chrome.storage.local.get(["intervalStored"]) == true) {
// 	var interval = chrome.storage.local.get(["intervalStored"]);
// } else {
// 	var interval = 86400000; // 24h in milliseconds
// }

// //last time asked, if none found, defaults to date decades ago
// if(chrome.storage.local.get(["lastAskedStored"]) == true) {
// 	var lastAsked = chrome.storage.local.get(["lastAskedStored"]);
// } else {
// 	var lastAsked = 0; //Jan 1, 1970, Unix epoch
// }

// var lastAsked = get("lastAskedStored");

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     lastAsked = Date.now;
//     chrome.storage.local.set({"lastAskedStored": lastAsked});
//     moodHistory.push({time:Date.now, mood:request.answer1});
//     chrome.storage.local.set({"moodHistoryStored": moodHistory});
//     console.log(moodHistory);
//   });
