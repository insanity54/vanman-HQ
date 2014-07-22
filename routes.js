

function routes(app) {

    app.get('/', function(req, res) {
	res.send(404, 'nope');
    });

}

module.exports = routes;
