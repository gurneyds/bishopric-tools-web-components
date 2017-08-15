var DetailsViewProto = Object.create(HTMLElement.prototype);

DetailsViewProto.createdCallback = function() {
	this.innerHTML = "<h3>Details View</h3>";
}

var DetailsView = document.registerElement('details-view', {
	prototype: DetailsViewProto
});

module.exports = DetailsView;