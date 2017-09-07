require('./ListPicker');
require('./DetailsView');

var InterviewPageProto = Object.create(HTMLElement.prototype);

InterviewPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the interview page</h2><list-picker></list-picker><details-view></details-view></div>";
}

InterviewPageProto.setData = function(dataArray) {
	console.log("InterviewsPage setData called");
	dataArray.interviews.forEach(function(item) {
//		console.log(JSON.stringify(item));
	});
}

var InterviewsPage = document.registerElement('interviews-page', {
	prototype: InterviewPageProto
});

module.exports = InterviewsPage;
