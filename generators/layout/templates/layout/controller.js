import VM from './viewModel';

export default class Controller {
	constructor(args) {
		var ctrl = this;
		ctrl.vm = new VM(args);
		return this;
	}
}