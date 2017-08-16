var MockData = require('./MockData');

module.exports = (function(){
	var data = {
		visits: [],
		interviews: [],
		wardCouncil: [],
		sacramentMeeting: []
	};

	function getAllData() {
		return MockData;
	}

	function getVisitData() {
		return MockData.visits;
	}

	function getInterviewData() {
		return Mockdata.interviews;
	}

	function getWardCouncilData() {
		return MockData.wardCouncil;
	}

	function getSacramentMeetingData() {
		return MockData.sacramentMeeting;
	}

	return {
		getAllData: getAllData,
		getVisitData: getVisitData,
		getInterviewData: getInterviewData,
		getWardCouncilData: getWardCouncilData,
		getSacramentMeetingData: getSacramentMeetingData
	}
})();