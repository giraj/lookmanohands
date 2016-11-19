console.log("testing.");

chrome.runtime.onInstalled.addListener(install);
chrome.runtime.onStartup.addListener(startup);     // run when chrome starts up

function install() {
    console.log("Fresh install; setting storage defaults.");
    
    // set storage defaults
    var defaults = { "enabled": 0 };
    chrome.storage.local.set(defaults);

    startup();
}


// registers browserAction.onClick event and initializes the icon
function startup() {
    console.log("from within startup");

    chrome.storage.local.get("enabled", initIcon);
    chrome.browserAction.onClicked.addListener(browserActionClicked);
}

function browserActionClicked(tab) {
    console.log("from within browser action");
// toggle "enabled" in storage and update icon accordingly
}

function initIcon(enabled) {

    // if the 'get' failed, e.g. if storage doesn't contain 'enabled
    // we just consider the app as enabled, and 
    if (chrome.runtime.lastError) {
        chrome.storage.local.set("enabled", false);
        chrome.browserAction.setIcon({ path: "graphics/IconClosedSmall.png" });
    }
    else {
        if (enabled) {
            chrome.browserAction.setIcon({ path: "graphics/IconSmall.png" });
        }
        else {
            chrome.browserAction.setIcon({ path: "graphics/IconClosedSmall.png" });
        }
    }
}