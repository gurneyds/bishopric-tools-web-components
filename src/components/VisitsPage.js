"use strict";
require('./ListPicker');
require('./DetailsView');

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
		<h2>This is the visits page</h2>
		<list-picker></list-picker>
		<details-view></details-view>
	</div>
	`;

	class VisitsPage extends HTMLElement {
		constructor() {
			super();
			consol.log("VisitsPage constructor called");
			// Shadow Root
			this._root = this.attachShadow({mode: "open"});
		}

		createdCallback() {
			this.createShadowRoot().innerHTML = template;
		}

		setData(data) {
			console.log('visitPage setData called');
		}
	}

	document.registerElement('visits-page', VisitsPage);
})();
