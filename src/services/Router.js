var VisitsPage = require('../components/VisitsPage');
var InterviewsPage = require('../components/InterviewsPage');
var WardCouncilPage = require('../components/WardCouncilPage');
var SacramentMeetingPage = require('../components/SacramentMeetingPage');
var DataService = require('../services/DataService');

module.exports = (function() {
	// Watch for nav bar changes
	window.onhashchange = function(event){
		showPage();
	};

	showPage();

	function showPage() {
		var hash = document.location.hash.substr(1);
		var page = hash ? document.querySelector(hash) : null;

		// Hide all of the pages
		document.querySelectorAll('visits-page-html, visits-page-two, interviews-page, ward-council-page-two, sacrament-meeting-page').forEach(function(page) {
			page.style.display = 'none';
		});

		// Show the selected page
		if(page) {
			page.style.display = 'block';
			page.setData(DataService.getAllData());
		} else {
			document.location.hash = '#visits-page-html';
		}
	}
})();
