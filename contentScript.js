var websites = [
    "facebook.com",
    "twitter.com"
];

var intervalMs = 1000 * 60 * 60;
var tolerantMs = 1000 * 60 * 3;

websites.forEach(w => {

    if (document.location.hostname.match(new RegExp(w + "$", "i"))) {

        chrome.storage.sync.get(w, function(result) {
            console.log(result);
            
            if (result[w]) {
                console.log((+new Date) - result[w], intervalMs);

                if ((+new Date) - result[w] < intervalMs &&
                    (+new Date) - result[w] > tolerantMs) {

                    console.log("sorry")    

                    document.location.href = (
                        chrome.runtime.getURL('page.html') +
                        "?url=" + encodeURIComponent(document.location.href) +
                        "&from=" + result[w]
                    );
                    return;
                }
            }

            chrome.storage.sync.set({[w]: +new Date}, function() {
                console.log('New value ' + w);
            });

            setInterval(() => {
                if (!document.hidden) {
                    chrome.storage.sync.get(w, function(result) {
                        if ((+new Date) - result[w] < tolerantMs) {
                            chrome.storage.sync.set({[w]: +new Date});
                        }
                    });
                }
            }, 1000);
        });
    }
});




