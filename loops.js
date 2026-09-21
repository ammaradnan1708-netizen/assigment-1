//Question 1
for (let i=1; i<=10; i++) {
    console.log (i);
}

//Question 2
let a = 10 ;
let sum = 0;
let b = 1;
while (b <=a) {
    sum+=b;
    b++;
    }
    console.log ("sum =",sum );

//Question 3
let number = 5;
for (let i=1; i<=10; i++) {
    console.log (number + "x" + i + "=" + (number * i));
}    

//Question 4
let num = 10 ;
let factorial = 1;
let j = 1 ;
while (j <= num) {
    factorial *= j ;
    j++;
}
console.log ("factorial =",factorial);

//Question 5
for ( let i=10; i>=1; i--) {
    console.log (i);
}

//Question 6
let n = 20 ;
let i = 1;
do {
    if ( i % 2 === 0){
        console.log (i);
}
i++;

} while (i <=n);

//question 7
let number1 = "12345";
let sum1 = 0;
while (number1 > 0){
    sum1 = sum1 + (number % 10);
    number1 = Math.floor(number1 /10);
    
}
console.log ("sum of digits =", sum1 );

//question 8
let first = 0;
let second = 1;
for (let i=1 ;i<=10; i++) {
    console.log (first);
    let next = first + second ;
    irst = second ;
    second = next ;
}


//Question 9
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let correctNumber = 7;

function guessNumber () {
    rl.question("Guess the number: ", (answer) => {
        let guess = Number(answer);

        if (guess === correctNumber) {
            console.log("Correct! You guessed the number.");
            rl.close();
        } else {
            console.log("Wrong guess. Try again.");
            guessNumber();
        }
    });
}

guessNumber();

//Question 10
let number2 = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}