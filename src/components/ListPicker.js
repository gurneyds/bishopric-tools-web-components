"use strict";

(function() {
	let template = `
	<style>
		.container {
			border: 1px solid black;
			margin: 5px;
			padding: 5px;
		}
	</style>
	<div class='container'>
		<h2>This is the list picker page</h2>
	</div>
	`;

	class ListPicker extends HTMLElement {
		constructor() {
			super();
			consol.log("ListPicker constructor called");
			// Shadow Root
			this._root = this.attachShadow({mode: "open"});
		}

		createdCallback() {
			this.createShadowRoot().innerHTML = template;
		}

		setData(data) {
			console.log('ListPicker setData called');
		}
	}

	document.registerElement('list-picker', ListPicker);
})();
