var ListPickerProto = Object.create(HTMLElement.prototype);

var markup = "<h2>This is the list picker</h2>";

ListPickerProto.createdCallback = function() {
	this.innerHTML = markup;
}

var ListPickerOld = document.registerElement('list-picker-old', {
	prototype: ListPickerProto
});

module.exports = ListPickerOld;
