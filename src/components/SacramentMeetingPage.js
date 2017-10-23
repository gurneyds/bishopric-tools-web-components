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
		.parts-container {
			display: grid;
			grid-template-columns: 1fr 1fr
		}	</style>
	<div class='container'>
		<h2>This is the Sacrament meeting page</h2>
		<div class="parts-container">
			<list-picker></list-picker>
			<details-view></details-view>
		</div>
	</div>
	`;

	class SacramentMeetingPage extends HTMLElement {
		constructor() {
			super();
			// Shadow Root
			this.attachShadow({mode: "open"}).innerHTML = template;
		}

		createdCallback() {
		}

		setData(data) {
			console.log('sacrament meeting page setData called');
		}
	}

	customElements.define('sacrament-meeting-page', SacramentMeetingPage);
})();
