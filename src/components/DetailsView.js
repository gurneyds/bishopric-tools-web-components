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
			// Shadow Root
			this.attachShadow({mode: "open"}).innerHTML = template;
		}

		createdCallback() {
		}

		setData(data) {
			console.log('DetailsView setData called');
		}
	}

	customElements.define('details-view', DetailsView);
})();
