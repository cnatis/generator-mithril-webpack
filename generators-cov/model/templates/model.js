import m from 'mithril';

export default {
	url: '<%= url %>',
	create(args) {
		return m.request({method: 'POST', url: this.url, data: args});
	},
	retrieve(args) {
		return m.request({method: 'GET', url: this.url, data: args});
	},
	update(args) {
		return m.request({method: 'PATCH', url: this.url, data: args});
	},
	delete(args) {
		return m.request({method: 'DELETE', url: this.url, data: args});
	}
};