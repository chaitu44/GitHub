describe("fadeOut",function(){
	it("should fade out the given DOM node within the given time interval",function(){

		//arrange
			var domNode = document.createElement("div"),
				duration = 2000,
				callback = jasmine.createSpy("fadeOutCallback");
		//act
			runs(function(){
				fadeOut(domNode,duration,callback);
			});

		//assert
			waitsFor(function(){
				return domNode.style.opacity == 0;
			},"FadeOut Operation output", duration + 100);

	});
});