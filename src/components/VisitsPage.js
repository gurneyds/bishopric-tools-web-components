require('./ListPicker');
require('./DetailsView');

// document.currentScript.ownerDocument

var VisitsPageProto = Object.create(HTMLElement.prototype);

var template = "<style>.container {\n" +
	"    border: 1px solid black;\n" +
	"    margin: 5px;\n" +
	"    padding: 5px;\n" +
	"}</style><div class='container'><h2>This is the visits page</h2><list-picker></list-picker><details-view></details-view></div>";

VisitsPageProto.createdCallback = function() {
	var root = this.createShadowRoot();
	root.innerHTML = template;
};

VisitsPageProto.attachedCallback = function() {
	console.log('attached');
};

VisitsPageProto.detachedCallback = function() {
	console.log('detatched');
};

VisitsPageProto.attributeChangedCallback = function(attrName, oldVal, newVal) {
	console.log(attrName + ", " + oldVal + ', ' + newVal);
};

var VisitsPage = document.registerElement('visits-page', {
	prototype: VisitsPageProto
});

module.exports = VisitsPage;