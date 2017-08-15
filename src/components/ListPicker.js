var ListPickerProto = Object.create(HTMLElement.prototype);

ListPickerProto.createdCallback = function() {
	this.innerHTML = "<h2>This is the list picker with edits</h2>";
}

var ListPicker = document.registerElement('list-picker', {
	prototype: ListPickerProto
});

module.exports = ListPicker;