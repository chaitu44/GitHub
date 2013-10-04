define([
	'jquery',
	'backbone',
	'models/bookModel',
	
], function ($, Backbone, Book) {
	'use strict';
var BooksCollection = Backbone.Collection.extend({
			model : Book,
			localStorage : new Backbone.LocalStorage("Books")
		});

})