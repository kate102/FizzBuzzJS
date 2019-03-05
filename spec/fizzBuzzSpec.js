describe('FizzBuzz', function() {

  var fizzbuzz;

  describe('it knows when a number is... ',function() {
    it('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('returns fizz/buzz/fizzbuzz/number depending on input', function() {
    it('returns fizz if divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(3)).toBe("fizz");
    })
    it('returns buzz if divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(5)).toBe("buzz");
    })
    it('returns fizzbuzz if divisible by 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(15)).toBe("fizzbuzz");
    })
    it('returns itself if not divisible by 3, 5 or 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(7)).toBe(7);
    })
  });
});
