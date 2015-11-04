	'###newRouteURL###': {
		controller: function() {
			require.ensure([], () => {
				routes['###newRouteURL###'] = require('###newRoutePath###');
				m.route(m.route());
				lazyLoad();
			})
		}
	},