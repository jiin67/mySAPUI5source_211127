sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
   
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller , JSONModel) {
		"use strict";

		return Controller.extend("zproject0921112602unit91e.controller.View1", {
			onInit: function () {

                let oModel = new JSONModel();
                oModel.loadData( "../model/data.json" );
                this.getView().setModel( oModel );
			},
            onAirlineClick: function( oEvent ) {
                // alert( "Nice!" );               
                let sPath = oEvent.getSource().getBindingContext().getPath();
                // alert( sPath );
                let oTableCon = this.byId("idconnections");
                alert(oTableCon);
                oTableCon.bindElement( sPath );
            },
            onSelectionChange: function( oEvent ){
                let sPath =  oEvent.getParameter("listItem").getBindingContext().getPath();
                // alert( sPath );
                let oTableCon = this.byId("idconnections");
                oTableCon.bindElement( sPath );
            },
            onSelect: function( oEvent ){
                
                let sPath  = oEvent.getParameter("listItem").getBindingContext().getPath();
                // alert( sPath );
                let oPanel = this.byId("idpanel");
                oPanel.bindElement( sPath );                

            }


            
		});
	});
