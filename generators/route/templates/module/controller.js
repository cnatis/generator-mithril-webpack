import VM from './viewModel';
export default function(args) {
	var ctrl = this;
	ctrl.vm = new VM(args);
	return this;
}