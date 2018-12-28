var express = require('express');
var app = express();
var router = express.Router();

router.use(function(req, res, next)
{
	var start_time = +new Date();
	res.on('finish', function()
	{
		var duration = +new Date() - start_time;
		console.log('---> method: ' + req.method + ' (at KONTAKT.JS file) - url: ' + req.url + ' - done in: ' + duration + 'ms \n');
		
		//console.log('---> method: ' + req.method + ' - at SEO.JS file - url: ' + req.url + ' - done in: ' + duration + 'ms \n');
		//OR
		//var stream = process.stdout; // standart output - this is writable stream we can access by process.stdout - process.stdout is like console.log
		//var message = '---> method: ' + req.method + ' - at SEO.JS file - url: ' + req.url + ' - done in: ' + duration + 'ms \n';
		//stream.write(message);
	});
    next();
});

/* ze wzgledu na socket.io
router.get('/', function(req, res)
{
	//res.redirect('/'); // to psuje zabawe z socket.io - bo sockety zamiast dotrzec do '/cel' sa przekierowywane do http://localhost:6500/ (strony glownej - '/')
	// malo tego trzeba wylaczyc calego [router.get('/',]... i teraz gdy user bedzie probowal dostac sie do '/cel' dostanei errora - chyba ze zrobi to przez normalny formularz celu :)
	//res.end();
});
*/

router.get('/', function(req, res) // to jest ('/') tak naprawde adres http://localhost:6500/kontakt
{
	//res.set({'content-type' : 'text/html; charset=utf-8'}); //czemu to nie dziala !?    //res.set({'content-type' : 'application/json; charset=utf-8'});
	//res.charSet = 'utf-8';
	
	/* testing socket.io perserve between '/' and '/cel':
		var room = '';
		
		// if 'global.io' and not 'var io' then change 'req.io' to 'io'
		req.io.on('connection', function(socket)
		{
			room = 'room-' + socket.id;
			socket.join(room);
			//console.log(room);
			
			//socket.on('socketio content', function(content){});
		});
	*/
	
	res.render('kontakt'); // nie musimy podawac rozszerzenia pliku - .ejs
	//res.end();
	//next();
});

module.exports = router;