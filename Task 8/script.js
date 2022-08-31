/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti 
objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return this.a + this.b;
  };
  this.sub = function () {
    return this.a - this.b;
  };
  this.multi = function () {
    return this.a * this.b;
  };
  this.div = function () {
    return this.a / this.b;
  };
}

const sk = new Calculator(6, 2);

console.log(
  "suma: " +
    sk.sum() +
    " skirtumas: " +
    sk.sub() +
    " daugyba: " +
    sk.multi() +
    " dalyba: " +
    sk.div()
);
