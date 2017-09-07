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
		<h2>This is the details view page</h2>
	</div>
	`;

	class DetailsView extends HTMLElement {
		constructor() {
			super();
			consol.log("DetailsView constructor called");
			// Shadow Root
			this._root = this.attachShadow({mode: "open"});
		}

		createdCallback() {
			this.createShadowRoot().innerHTML = template;
		}

		setData(data) {
			console.log('DetailsView setData called');
		}
	}

	document.registerElement('details-view', DetailsView);
})();
