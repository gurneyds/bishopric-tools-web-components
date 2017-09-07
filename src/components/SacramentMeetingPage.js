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
		<h2>This is the Sacrament meeting page</h2>
		<list-picker></list-picker>
		<details-view></details-view>
	</div>
	`;

	class SacramentMeetingPage extends HTMLElement {
		constructor() {
			super();
			consol.log("Sacrament meeting constructor called");
			// Shadow Root
			this._root = this.attachShadow({mode: "open"});
		}

		createdCallback() {
			this.createShadowRoot().innerHTML = template;
		}

		setData(data) {
			console.log('sacrament meeting page setData called');
		}
	}

	document.registerElement('sacrament-meeting-page', SacramentMeetingPage);
})();
