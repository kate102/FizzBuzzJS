function FizzBuzz() {

}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  if ( number % 3 == 0 ){
    return true;
  }
  else {
    return false;
  }
}

FizzBuzz.prototype.isDivisibleByFive = function (number) {
  if ( number % 5 == 0 ){
    return true;
  }
  else {
    return false;
  }
}

FizzBuzz.prototype.isDivisibleByFifteen = function (number) {
  if ( number % 15 == 0 ){
    return true;
  }
  else {
    return false;
  }
}

FizzBuzz.prototype.play = function (number) {
  if (this.isDivisibleByThree(number))
    {return "fizz"}
  else if (this.isDivisibleByFive(number))
    {return "buzz"}
  else
    {return number}
}
