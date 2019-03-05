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
