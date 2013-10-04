describe("UnivAdd",function(){

	it("should be able to add one number",function(){

		//Arrange
		var add = new UnivAdd()
			,number1 = 8
			,sumResult = 8;

		//Act
		var result = add.sum(number1);

		//Assert
		expect(result).toEqual(sumResult);

	});
	it("should be able to add two numbers",function(){

		//Arrange
		var add = new UnivAdd()
			,number1 = 8
			,number2 = 4
			,sumResult = 12;

		//Act
		var result = add.sum(number1,number2);

		//Assert
		expect(result).toEqual(sumResult);

	});
	it("should be able to add array of numbers",function(){

		//Arrange
		var add = new UnivAdd()
			,array1 = [1,2,3,4,5]
			,sumResult = 15;

		//Act
		var result = add.sum(array1);

		//Assert
		expect(result).toEqual(sumResult);

	});

});