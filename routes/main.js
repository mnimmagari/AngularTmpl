var express 			= require('express');
var colors 				= require('colors');
var constants 		= require('../scripts/constants.js');
var appInfoServ   = require(constants.paths.services + '/appService');
var menuBuilder   = require(constants.paths.scripts + '/menuBuilder');
var device = require('express-device');

module.exports = function(app, passport) {

		app.use(device.capture());
		
	app.use(function (req, res, next) {

		// build side menu if user is logged in
		var sideMenu = "";
		if(req.user !== undefined){
			sideMenu = menuBuilder.getMenu(req.user,"side");
		}

    res.locals={
      appTitle: "App-XLrater Base",
      pageTitle: "main",
      description: "App-XLrater Portal",
      user: req.user,
      app_info: appInfoServ.info(),
			appAssets: '',
			stdAssets: '',
			appName: '',
			device: req.device.type,
			menu: sideMenu			//ToDo: Can be effect performance & menu usage, improve this
  	};

	  next();
	});

	app.all('/*', function(req, res, next) {
	  // CORS headers
	  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	  // Set custom headers for CORS
	  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	  if (req.method == 'OPTIONS') {
	    res.status(200).end();
	  } else {
	    next();
	  }
	});

	// include routes here
	app.use('/', require('./apiRoutes')); // load api endpoint routes
	require('./authRoutes.js')(app, passport); // load authentication routes, fully configured with passport
	require('./pageRoutes.js')(app);
	require('./mobileRoutes.js')(app);
	//ToDo:: Tighten security for public assets
	app.use('/libs', express.static('libs')); // folder to render public assets. Can be improved for security tightening
	app.use('/assets', express.static('assets'));
	app.use('/d',express.static('d'));
	app.use('/mods',express.static('mods'));
	app.use('/m',express.static('m'));
	app.use('/uploads',express.static('uploads'));
	app.use('/profile', express.static('profile'));//folder to render user profile assets.
	// If no route is matched by now, it must be a 404
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

	// include error handler
	//require(constants.paths.scripts + '/err')(app);
}
