babel = require('babel-core');
babel.transformFile(__dirname + '/server.js', function(err, res) {
	console.log(__dirname);
	console.log('errer', err);
	console.log('response', res);
});