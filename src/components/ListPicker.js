"use strict";

(function() {
	let template = `
	<style>
		.container {
			border: 1px solid black;
			margin: 5px;
			padding: 5px;
		}
		.list-container {
			border: 1px solid #ddd;
		}
		.list-container > div {
		}
		.list-container > div:hover {
			background: yellow;
		}
		.delete-button {
			background: url(images/delete.png) no-repeat 6px center;
		}
		.close {
			position: absolute;
			top: 15px;
			right: 35px;
			color: #f1f1f1;
			font-size: 40px;
			font-weight: bold;
			transition: 0.3s;
		}

		.close:hover,
		.close:focus {
			color: #bbb;
			text-decoration: none;
			cursor: pointer;
		}
	</style>
	<div class='container'>
		<h2>This is the list picker page</h2>
		<div class='list-container'>
			<div>Item one <span class="close">x</span></div>
			<div>Item two</div>
			<div>Item three</div>
			<div>Item four</div>
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
