# ip-location-middleware

Express middleware for getting client IP address and location.

## Installation

Add to your project's `package.json` dependancies:

```json

...
"dependencies": {
    "ip-location-middleware": "https://github.com/obe711/ip-location-middleware",
    ...
  }

```

Then in your `app.js` or `server.js` file:

```javascript
const ipLoc = require('ip-location-middleware');

// MY_API_KEY is your API key for the iploc API
app.use(ipLoc(MY_API_KEY));
```
