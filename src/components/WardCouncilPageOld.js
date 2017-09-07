require('./ListPicker');
require('./DetailsView');

var WardCouncilPageProto = Object.create(HTMLElement.prototype);

WardCouncilPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the Ward Council page old</h2><list-picker></list-picker><details-view></details-view></div>";
}

WardCouncilPageProto.setData = function(dataArray) {
	console.log("WardCouncilPage setData called");
	dataArray.wardCouncil.forEach(function(item) {
//		console.log(JSON.stringify(item));
	});
}

var WardCouncilPage = document.registerElement('ward-council-page-old', {
	prototype: WardCouncilPageProto
});

module.exports = WardCouncilPage;