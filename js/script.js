
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {
	loadData();
});
	// 1.
	// When the page is loaded,
	// call the loadData() function.



function loadData() {
	$.getJSON("js/donations_over_5K.json", function (donationsData) {
		writeTable(donationsData);
	});

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
}




	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>):
	// - Contribution Date
	// - Contributon Information
	// - Amount
}

for (i =0; i < donationsData.length; i++) {
	var date = donationsData[i]["Contribution Date"];
	var info = donationsData[i]["Contribution Information"];
	var amount = donationsData[i]["Amount"];
	var committee = donationsData[i]["Committee"];

	if (Committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
		console.log(date, info, amount, committee)
	}
}

$(".chart").append(
	"<table class='table-item'>"+
		"<table class='columns' style='width: "+columnsWidth+"30px'>"+amount+"</div>"+
		"<table class='rows' style='width: "rowsWidth+"30px'>"+amount+date+info"</div>"+
	"</table>"
);
}
