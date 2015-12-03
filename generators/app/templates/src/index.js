require('./index.html?output=index.html');
/*===== yeoman style require hook =====*/

function lazyLoad() {
	var onload = window.onload || function() {};
	window.onload = function() {
		var currentRoute = m.route();
		Object.keys(routes).forEach(function(key) {
			var route = routes[key];
			if(key !== currentRoute)
				route.controller();
		});
		onload();
	}
}

var routes = {
	/*===== yeoman hook =====*/
};

m.route(document.body, '/', routes);