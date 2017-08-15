require('./ListPicker');
require('./DetailsView');

var WardCouncilPageProto = Object.create(HTMLElement.prototype);

WardCouncilPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the Ward Council page</h2><list-picker></list-picker><details-view></details-view></div>";
}

var WardCouncilPage = document.registerElement('ward-council-page', {
	prototype: WardCouncilPageProto
});

module.exports = WardCouncilPage;