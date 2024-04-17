
chrome.runtime.onInstalled.addListener(function () {


  // list of each provider
  let names = [
    'Glassdoor',
    'Indeed',
    'Comparably',
    'every site'
  ];


  // creates a context menu for each of the providers
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let title = "Search \"%s\" on " + name +"!";

    chrome.contextMenus.create({
      title: title,
      contexts: ['selection'],
      id: name,
    });
  }
});


// takes the highlighted word and opens tab
 chrome.contextMenus.onClicked.addListener(function (word) {

  // object that gives names to the links
  let links = {
    Indeed: 'https://www.indeed.com/companies/search?q=',
    Glassdoor: 'https://www.glassdoor.com/Search/results.htm?keyword=',
    Comparably: 'https://www.comparably.com/search?q='
  };

const site = String(word.menuItemId); // this finds the id from the site selected and makes it look purty

// checks if the site is in the object
  if (site in links === true){
   chrome.tabs.create({ url: links[site] + word.selectionText });
  } else if (site == 'every site'){
    for (x in links){ // this opens all the links if you click all
      chrome.tabs.create({ url: links[x] + word.selectionText });;
    };
    }
    
 });