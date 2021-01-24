Find Server function.

## Installation

```terminal
$ npm install bt-find-server
```

## Usage

```javascript
// Require bt-find-server module as findServer.
var findServer = require('bt-find-server');

// Setup server array.
// Must be an array of objects containing url and priority values.
var serverArray = [{
	"url": "http://doesNotExist.kratikal.com",
	"priority": 1
	},
	{
	"url": "http://kratikal.com",
	"priority": 7
	},
	{
	"url": "http://offline.kratikal.com",
	"priority": 2
	},
	{
	"url": "http://google.com",
	"priority": 4
	}
]

// Call findServer() function passing in serverArray
findServer(serverArray).then(function(results) {
	// If successful, results will be an object containing:
	// { url: 'http://npmjs.com', priority: 4, statusCode: 200 }
}).catch(function(error) {
	// If unsuccessful, error contains message:
	  // Failed, all servers offline - If no servers responded with valid status code.
	  // Invalid server array - If no valid urls/priority values were provided.
	  // Fatal error, findserver() failed with message: \n + error.message
});
```


### Testing

```terminal
$ npm install
$ npm test
```


