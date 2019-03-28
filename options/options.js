chrome.options.set("Configure the domains (no www! no http:!) and the minimal interval", [
    {
        "type": "list",
        "name": "domains",
        "fields": [
            {
                "type": "text",
                "name": "domain",
                "required": true
            }
        ],
        "default": ["facebook.com", "twitter.com"]
    },
    {
        "type": "text",
        "name": "interval",
        "default": "60",
        "desc": "Interval, in minutes"
    }
]);
