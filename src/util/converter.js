let fs = require('fs');

module.exports = (function() {
  function getRawData() {
    let contents = fs.readFileSync('./rawData.json', 'utf8');
    return JSON.parse(contents);
  }

  function createCalling(org, item) {
      if(item && item.memberName) {
        let calling = {
          org: org.defaultOrgName,
          calling: item.position,
          person: item.memberName,
          since: item.activeDate
        };
        return calling;
      } else {
        return null;
      }
  }

  function processItem(list, org, item) {
    console.log("--------processItem: " + org.defaultOrgName + " ------------");
    if (item && typeof item.callings != "undefined") {
      for(let i=0; i < item.callings.length; i++) {
        let calling = createCalling(org, item.callings[i]);
        if(calling != null) {
          list.push(calling);
        }

        // Recursively call in case there are more
        processItem(list, org, item.callings[i]);
      }
    }

    if (item && typeof item.children != "undefined"){
      for(let i=0; i < item.children.length; i++) {
        let calling = createCalling(org, item.children[i]);
        if(calling != null) {
          list.push(calling);
        }

        // Recursively call in case there are more
        processItem(list, org, item.children[i]);
      }
    }
  }

  function processRawData() {
    // Top level organizations
    let organizations = getRawData();

    let list = [];

    for(let i=0; i < organizations.length; i++) {
      let org = organizations[i];
      processItem(list, org, org);

      // let callings = org.callings;
      // let children = org.children;
      //
      // for(let j = 0; j < callings.length; j++){
      //   list.push(processCalling(org, callings[j]));
      // }
      //
      // for(let j = 0; j < children.length; j++){
      //   list.push(processCalling(org, children[j]));
      //
      //   if(children[j]) {
      //     for(let k = 0; k < children[j].children.length; k++){
      //       list.push(processCalling(org, children[j].children[k]));
      //     }
      //   }
      // }
    };

    return list;
  }

	return {
		processRawData: processRawData
	}
})();
