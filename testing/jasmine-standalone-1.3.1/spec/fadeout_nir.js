describe("fade", function () {
  
   it("should support async execution of test preparation and exepectations", function() {
     var newdom = document.createElement('p');
    var flag = false, value = 0;
    runs=(function(){
      fadeOut(newdom, 100, function(){
         
      });
      flag = true;
    });
    waitsFor(function() {
        value++;
        console.log(value);
        return flag;
      }, "The Value should be incremented", 1000);
      runs(function() {
          expect(value).toBeGreaterThan(0);
      }); 
   });
  
});
