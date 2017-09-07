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
      <h2>This is the visits2 page</h2>
      <list-picker></list-picker>
      <details-view></details-view>
    </div>
  `;

  class VisitsPage2 extends HTMLElement {
    constructor() {
      super();
      consol.log("VisitsPage2 constructor called");
      // Shadow Root
      this._root = this.attachShadow({mode: "open"});
    }

    createdCallback() {
      this.createShadowRoot().innerHTML = template;
    }

    setData(data) {
      console.log('visitPage2 setData called');
    }
  }

  document.registerElement('visits-page-two', VisitsPage2);
})();
