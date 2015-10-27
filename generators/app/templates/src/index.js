require('./index.html?output=index.html');
/*===== yeoman style require hook =====*/

import m from 'mithril';

function lazyLoad() {
	let onload = window.onload || function() {};
	window.onload = function() {
		let currentRoute = m.route();
		Object.keys(routes).forEach(function(key) {
			var route = routes[key];
			if(key !== currentRoute)
				route.controller();
		});
		onload();
	}
}

let routes = {
	/*===== yeoman hook =====*/
};

m.route(document.body, '/', routes);