var Book = Backbone.Model.extend({
  url : "books",
  defaults : {
   	id : -1,
   	title : "<No title Yet>",
   	units : 10,
   	unitCost :0
  },
  initialize : function(){
  	console.log("a new Book model instance is created");
  }
});