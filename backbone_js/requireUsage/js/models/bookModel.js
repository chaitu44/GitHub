define([
	'underscore',
	'backbone'
], function (_, Backbone) {
var Book = Backbone.Model.extend({
		
		  defaults : {
		     title : "<No Title Yet>",
		     units : 10,
		     unitCost : 0
		  },
		  canBeSaved : function(){
		  	return this.get("units") > 0;
		  },
		  initialize : function(){
		    console.log("a new Book model instance is created");
		  }
		 
		});
})