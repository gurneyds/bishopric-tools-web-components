require('./ListPicker');
require('./DetailsView');

var SacramentMeetingPageProto = Object.create(HTMLElement.prototype);

SacramentMeetingPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the Sacrament Meeting page</h2><list-picker></list-picker><details-view></details-view></div>";
}

SacramentMeetingPageProto.setData = function(dataArray) {
	dataArray.sacramentMeeting.forEach(function(item) {
		console.log(JSON.stringify(item));
	});
}

var SacramentMeetingPage = document.registerElement('sacrament-meeting-page', {
	prototype: SacramentMeetingPageProto
});

module.exports = SacramentMeetingPage;