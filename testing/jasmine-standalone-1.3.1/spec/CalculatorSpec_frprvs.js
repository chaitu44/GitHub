describe("calculator",function(){
	it("triggerSalaryChange function is working",function(){

		//Arrange


		calculator.basic(10000);
		calculator.hra(10000);
		calculator.da(1000);
		calculator.tax(10);

		//substitue a test double for "changed" susbscriber

		var isSubscriberCalled = false;

		function testDoubleCallback(){
			isSubscriberCalled = true;
		}
		calculator.subscribeSalaryChange(testDoubleCallback);	

		//Act
		calculator.calculate();

		//Assert
		expect(true).toEqual(isSubscriberCalled);


	});
});