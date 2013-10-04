describe("Calculator",function(){

	it("should be able to add two positive numbers",function(){

		//Arrange
		var calculator  = new Calculator()
			,number1 = 10
			,number2 = 20
			,addResult = 30;

		//Act
		calculator.add(number1,number2);

		//Assert
		expect(calculator.result).toEqual(addResult);
	});


	it("should be able to add two negative numbers",function(){

		//Arrange
		var calculator  = new Calculator()
			,number1 = -10
			,number2 = -20
			,addResult = -30;

		//Act
		calculator.add(number1,number2);

		//Assert
		expect(calculator.result).toEqual(addResult);

	});
})