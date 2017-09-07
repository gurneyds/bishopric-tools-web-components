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
      <h2>This is the Ward Council page</h2>
      <list-picker></list-picker>
      <details-view></details-view>
    </div>
  `;

  class WardCouncilPage2 extends HTMLElement {
    constructor() {
      super();
      consol.log("WardCouncilPage2 constructor called");
      // Shadow Root
      this._root = this.attachShadow({mode: "open"});
    }

    createdCallback() {
      this.createShadowRoot().innerHTML = template;
    }

    setData(data) {
      console.log('wardCouncilPage2 setData called');
    }
  }

  document.registerElement('ward-council-page-two', WardCouncilPage2);
})();
