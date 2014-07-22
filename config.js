var nconf = require('nconf');

function config(app) {
    nconf.env(['PORT'])
	.file({ file: 'config.json' });
    
    nconf.defaults({
	'PORT': '29834'
    });
    
    app.set('port', nconf.get('PORT'));
}

module.exports = config;
