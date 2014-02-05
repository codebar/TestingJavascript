describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("farheneit to celcius", function() {
      var result = convertFahrenheitToCelcius(100);

      expect(result).toEqual('37.8');
    });
  });
});
