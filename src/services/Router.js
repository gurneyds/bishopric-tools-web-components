var VisitsPage = require('../components/VisitsPage');
var InterviewsPage = require('../components/InterviewsPage');
var WardCouncilPage = require('../components/WardCouncilPage');
var SacramentMeetingPage = require('../components/SacramentMeetingPage');

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
		document.querySelectorAll('visits-page-html, interviews-page, ward-council-page, sacrament-meeting-page').forEach(function(page) {
			page.style.display = 'none';
		});

		// Show the selected page
		if(page) {
			page.style.display = 'block';
		} else {
			document.location.hash = '#visits-page-html';
		}
	}
})();