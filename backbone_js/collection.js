var BooksCollection = Backbone.Collection.extend({
	model : Book,
	localStorage : new Backbone.localStorage("Books")
});