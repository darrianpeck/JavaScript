/*
    Create a new file called validateComparison.js in the app folder of the application. 
        This is the JavaScript code that you wish to test.  
    Use the attached test plan for input values and expected results used to test the function. 
        Place the test plan within the validateComparison.js file as a block comment. 
    Refactor the validateComparison.js file with the code necessary to meet the defined tests.

    Create a function that will accept two numbers.  value1, value2
    Compare those numbers and display the larger of the two numbers. 
    Implement the following tests into Mocha. 
    Refactor the code of your function as needed to meet the expectations of the test plan and pass all required tests.
    Test Plan - input two numbers, compare them and display the larger of the two.

    value1                  value2                                      Expected Result
    5                           6                                               6
    4                           3                                               4
    3                           3                                   "The amounts are equal" 
        They entered numbers, same numbers they are equal
    a                           5                                   "Please enter a number in Value 1"
    5                           a                                   "Please enter a number in Value 2"
    ""                          5                                   "Please enter a number in Value 1"
    5                           ""                                  "Please enter a number in Value 2"
    -1                          5                                               5
    +34                         -30                                             34
    -5                          -6                                             -5
    5                           -1                                              5
    1.5                          2                                              2
    2                           1.5                                             2
    3/4                          1                                  "Please enter a number in Value 1"
        Fractions are not integers or decimal numbers
    5b                           3                                  "Please enter a number in Value 1"
    3                            5b                                 "Please enter a number in Value 2"
*/
let assert = require('chai').assert;

describe('Array', function() {

    let arr = [];//make this global so I don't have to make a new one every time
	
	it('should start empty', function() {
		assert.equal(arr.length, 0);
	});//if array.length = 0 then the test passses
	
	it('should have less than 10 items ', function() {
		let arr = [1,2,3,4];
		assert.isBelow(arr.length, 10);
	});
	
    //5 and 6
    it("5 is strictly less than 6", function(){
        assert.isBelow(5, 6, '5 is less than 6');
    });

    //4 and 3
    it("4 is strictly greater than 3", function(){
        assert.isAbove(4, 3, '4 is greater than 3');
    });

    //3 and 3, 'the amounts are equal'
    it("3 is equal to 3", function(){
        assert.equal(3, 3, 'the numbers are equal');
    });

    //a and 5, 'please enter a number in value 1'
    it("please enter a number in value1", function(){
        let a;
        assert.isNotNumber(a, 'a is NaN');
    });

    //5 and a, 'please enter a number in value 2'
    it("please enter a number in value2", function(){
        let a;
        assert.isNotNumber(a, 'a is NaN');
    });

    //"" and 5, 'please enter a number in value 1'
    it("please enter a number in value1", function(){
        assert.isNotNumber('', 'a is NaN');
    });

    //5 and "", 'please enter a number in value 2'
    it("please enter a number in value2", function(){
        assert.isNotNumber('', 'a is NaN');
    });

    //-1 and 5
    it("-1 is strictly less than 5", function(){
        assert.isBelow(-1, 5, '5 is greater than -1');
    });

    //34 and -30
    it("34 is strictly greater than -30", function(){
        assert.isAbove(34, -30, '34 is greater than -30');
    });

    //-5 and -6
    it("-5 is strictly greater than -6", function(){
        assert.isAbove(-5, -6, '-5 is greater than -6');
    });

    //5 and 1
    it("5 is strictly greater than 1", function(){
        assert.isAbove(5, 1, '5 is greater than 1');
    });

   //1.5 and 2
   it("1.5 is strictly less than 2", function(){
        assert.isBelow(1.5, 2, '1.5 is less than 2');
   });

   //2 and 1.5
   it("2 is strictly greater than 1.5", function(){
        assert.isAbove(2, 1.5, '2 is greater than 1.5');
   });

   //3/4 and 1, 'please enter a number in value 1 
    it("please enter a number in value1", function(){
        assert.isNotNumber('3/4', 'a is NaN');
    });

    //5b and 3, 'please enter a number in value 1
    it("please enter a number in value1", function(){
        assert.isNotNumber('5b', 'a is NaN');
    });

   //3 and 5b, please enter a number in value 2
    it("please enter a number in value2", function(){
        assert.isNotNumber('5b', 'a is NaN');
    });

});