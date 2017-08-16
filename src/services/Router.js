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
		console.log(document.location);
		var hash = document.location.hash.substr(1);
		console.log('hash:' + hash);
		var page = hash ? document.querySelector(hash) : null;
		console.log(page + ' selected');

		hideAllPages();

		// Show the selected page
		if(page) {
			page.style.display = 'block';
		} else {
			// Instantiate a new instance of the page
			var content = document.querySelector('#page-content');
			switch (hash) {
				case "visits-page":
					content.appendChild(new VisitsPage());
					break;
				case 'interviews-page':
					content.appendChild(new InterviewsPage());
					break;
				case 'ward-council-page':
					content.appendChild(new WardCouncilPage());
					break;
				case 'sacrament-meeting-page':
					content.appendChild(new SacramentMeetingPage());
					break;
				default:
					document.location.hash = '#visits-page';
			}
		}
	}

	function hideAllPages() {
		document.querySelector('visits-page') ? document.querySelector('visits-page').style.display = 'none' : '';
		document.querySelector('interviews-page') ? document.querySelector('interviews-page').style.display = 'none' : '';
		document.querySelector('ward-council-page') ? document.querySelector('ward-council-page').style.display = 'none' : '';
		document.querySelector('sacrament-meeting-page') ? document.querySelector('sacrament-meeting-page').style.display = 'none' : '';
	}

	function createOrShowPage(page) {
		if(document.querySelector(page)) {
			console.log(page + ' was already on the page');
		} else {
			var content = document.querySelector('#page-content');

			console.log('instantiating: ' + page);
			content.appendChild(new VisitsPage());
		}
	}

	return {
	}
})();