var DetailsViewProto = Object.create(HTMLElement.prototype);

DetailsViewProto.createdCallback = function() {
	this.innerHTML = "<h3>Details View</h3>";
}

var DetailsView = document.registerElement('details-view', {
	prototype: DetailsViewProto
});

var bar = `
	<html>
		<head></head>
		<body>Here is the body</body>
	</html>
`;
var foo = () => {console.log(bar);};

//console.log(foo());

module.exports = DetailsView;
