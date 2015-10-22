require('./index.html?output=index.html');
/*===== yeoman style require hook =====*/

import m from 'mithril';

let routes = {
	/*===== yeoman hook =====*/
};

m.route(document.body, '/', routes);