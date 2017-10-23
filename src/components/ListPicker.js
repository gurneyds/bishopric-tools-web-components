"use strict";

(function() {
	let template = `
	<style>
		.container {
			border: 1px solid red;
			margin: 5px;
			padding: 5px;
		}
		.list-container {
			border: 1px solid blue;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		.list-container > div {
			border-right: 1px solid black;
			padding-bottom:5px;
			padding-top:5px;
			padding-left:10px;
		}
		.list-container > div:hover {
			background: yellow;
		}
		.header {
			font-weight:bold;
			font-size:120%;
			border-bottom: 1px solid black;
		}
		.row-container {
			border: 1px solid blue;
		}
		.row {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		.row:hover {
			background: yellow;
		}
		.row > span, .row > a {
			border-right: 1px solid black;
			padding-bottom:5px;
			padding-top:5px;
			padding-left:10px;
		}

		.down.header:after {
			content: '▼';
			display: inline-block;
			margin-left: 5px;
			transition: all 0.25s;
			transform: rotate(0);
			font-size: 40%;
			color: gray;
		}
		.up.header:after {
			transform: rotate(180deg);
		}
	</style>
	<div class='container'>
		<h2>Pick an item</h2>
		<div class="row-container">
			<div class="row">
				<a class="header">Name</a> <a class="header down">Date</a> <a class="header">Organization</a> <a class="header">Count</a>
			</div>

			<div class="row">
				<span>John</span><span>26 Sept 2017</span><span>Elders</span><span>245</span>
			</div>
			<div class="row">
				<span>John</span><span>26 Sept 2017</span><span>Elders</span><span>245</span>
			</div>
			<div class="row">
				<span>John</span><span>26 Sept 2017</span><span>Elders</span><span>245</span>
			</div>
			<div class="row">
				<span>John</span><span>26 Sept 2017</span><span>Elders</span><span>245</span>
			</div>
		</div>
	</div>
	`;

	/*
	The purpose of this component is to render a list of items and do the following:
	1-) Emit an event when an item is selected
	2-) Emit an event when a delete icon is selected
	3-) Emit an event when the user wants to create a new item
	4-) Listen for data change events and re-render the list
	*/
	class ListPicker extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({mode: "open"}).innerHTML = template;
		}

		connectedCallback() {
			console.log('connectedCallback called');
			this.hasNameCol = this.getAttribute('nameCol') || true;
			this.hasDateCol = this.getAttribute('dateCol') || false;
			this.hasCountCol = this.getAttribute('countCol') || false;
			this.hasOrgCol = this.getAttribute('orgCol') || false;

			// Watch for header click events
			Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.header'), function(el) {
				console.log('hi');
				el.addEventListener('click', () => {this.open = !this.open;});
			});
		}

		setData(data) {
			console.log('ListPicker setData called');
			this.data = data;
		}

		_render() {

		}
	}

	customElements.define('list-picker', ListPicker);
})();
