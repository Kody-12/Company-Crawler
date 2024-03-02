// creates right click menu based off highlighted word 
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'indeed',
    title: "Search \"%s\" on Indeed!",
    contexts: ["selection"],
  });
});

// takes the highlighted word and opens indeed tab
chrome.contextMenus.onClicked.addListener(function (word) {
  chrome.tabs.create({ url: "https://www.indeed.com/companies/search?q=" + word.selectionText });
});

// // creates right click menu based off highlighted word 
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: 'glassdoor',
//     title: "Search \"%s\" on Glassdoor!",
//     contexts: ["selection"],
//   });
// });

// // takes the highlighted word and opens indeed tab
// chrome.contextMenus.onClicked.addListener(function (word) {
//   chrome.tabs.create({ url: "https://www.glassdoor.com/Search/results.htm?keyword=" + word.selectionText });
// });