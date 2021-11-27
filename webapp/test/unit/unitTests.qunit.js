/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zproject09_211126_02unit91e/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
