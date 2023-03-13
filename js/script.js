let a, b, h;
sum = 0;

do {
    a = +prompt("Enter number a", "1");
} while (isNaN(a) || !a);
document.write('a = ' + a + '<br>');

do {
    b = +prompt("Enter number b", "5");
} while (isNaN(b) || !b || b <= a);
document.write('b = ' + b + '<br>');

do {
    h = +prompt("Enter step", "1");
} while (isNaN(h) || !h || h < 0);
document.write('h = ' + h + '<br>');

for (a; a <= b; a += h) {
    console.log(a);
    for (j = 1, factorial = 1; j <= a; j++) {
        console.log(`${j}`);
        factorial = factorial * j;
    }
    sum += factorial;
}
document.write(`Sum = ${sum}`);