module.exports = {
	withOneValid: [{
		"url": "http://doesNotExist.kratikal.com",
		"priority": 1
	}, {
		"url": "http://kratikal.com",
		"priority": 7
	}, {
		"url": "http://offline.kratikal.com",
		"priority": 2
	}, {
		"url": "http://google.com",
		"priority": 4
	}],

	withNoneValid: [{
		"url": "http://doesNotExist.kratikal.com",
		"priority": 1
	}, {
		"url": "http://kratikal.com",
		"priority": 7
	}, {
		"url": "http://offline.kratikal.com",
		"priority": 2
	}],

	emptyArray: []
};
