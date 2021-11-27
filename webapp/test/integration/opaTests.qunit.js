/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["zproject0921112602unit91e/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
