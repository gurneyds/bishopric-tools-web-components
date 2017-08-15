require('./ListPicker');
require('./DetailsView');

var VisitsPageProto = Object.create(HTMLElement.prototype);

VisitsPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the visits page</h2><list-picker></list-picker><details-view></details-view></div>";
}

var VisitsPage = document.registerElement('visits-page', {
	prototype: VisitsPageProto
});

module.exports = VisitsPage;