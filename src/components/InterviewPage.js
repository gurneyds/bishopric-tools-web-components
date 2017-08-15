require('./ListPicker');
require('./DetailsView');

var InterviewPageProto = Object.create(HTMLElement.prototype);

InterviewPageProto.createdCallback = function() {
	this.innerHTML = "<div class='container'><h2>This is the interview page</h2><list-picker></list-picker><details-view></details-view></div>";
}

var InterviewPage = document.registerElement('interview-page', {
	prototype: InterviewPageProto
});

module.exports = InterviewPage;