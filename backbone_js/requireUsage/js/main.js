'use strict';

require.config({
	shim:{
		underscore:{
			exports:'_'
		},
		backbone:{
			deps:[
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths:{
		jquery:'lib/jquery-1.10.2.js',
		underscore:'lib/underscore.js',
		backbone: 'lib/backbone.js',
		backboneLocalstorage:'lib/backbone.localstorage.js'
	}
});

require([
		'backbone',
		'models/bookModel'
		'collections/bookCollection'
		'views/bookCollectionView'

],function(Backbone,Book,BooksCollection,BooksListView){
	window.book = new Book();
			/*window.bookView= new BookView({model : window.book});
			window.bookView.render().$el.appendTo(document.body);*/
			window.books = new BooksCollection();
			var booksList = new BooksListView({collection : books});

			$(document.body).append(booksList.render().$el);
})