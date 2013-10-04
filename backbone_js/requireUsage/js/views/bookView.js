define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/view.html'
	],function($, _, Backbone, bookViewTemplate){

		var BookView = Backbone.View.extend({
		   templateId : "#bookViewTemplate",
		   id : "content",
		   initialize : function(){
		     this.listenTo(this.model,'change',this.render);
		     this.compiledTemplate =  _.template($("#bookViewTemplate").html());
		   },
		   events : {
		      "click #btnSave" : "saveBook",
		      "change input:text" : "updateBook"
		   },
		   render : function(){
		   	this.$el.html(this.compiledTemplate(this.model));
		    return this;
		   },
		   saveBook : function(){
		   		console.log(this.model.toJSON(), " saved");
		   },
		   updateBook : function(){
		   		console.log("updateBook triggered");
		   		this.model.set("title",this.$el.find("#txtTitle").val());
		   		this.model.set("units",this.$el.find("#txtUnits").val());
		   		this.model.set("unitCost",this.$el.find("#txtUnitCost").val());
		   }   
		});
	})
