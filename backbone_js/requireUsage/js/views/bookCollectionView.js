define([
	'jquery',
	'underscore',
	'backbone',
	'collections/bookCollection',
	'views/bookView',
	'text!templates/view.html',
	
], function ($, _, Backbone, BooksCollection, BookView, bookViewTemplate, Common) {
var BooksListView = Backbone.View.extend({
			tagName : "table",
			initialize : function(){
				this.listenTo(this.collection,"all",this.render);

			},
			render : function(){
				console.log("render triggered", arguments);
				var that = this,
					contents = '';
				this.collection.each(function(b){
					contents += "<tr><td>" + b.get("id") + "</td><td>" + b.get("title") + "</td><td>" + b.get("units") +"</td><td>" + b.get("unitCost") + "</td></tr>";
					
				});
				this.$el.html(contents);
				return this;
			}
		})
})