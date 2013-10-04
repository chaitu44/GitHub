describe("fadeOut",function(){
	
	it("fadeOut function is being called at intervals",function(){

			//Arrange
			runs(fadeOut());

			//Act
			waitsFor(fadeOut(),"The Value should be incremented ",100);
			//Assert
			runs(function() {
				expect(value).toBeGreaterThan(0);
			});

