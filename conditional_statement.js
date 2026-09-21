//Question 1
let number="10";
if (number > 0) {
    console.log("Positive")
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}


//Question 2
let num5= "10";
if (num5 % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

//Question 3
let num= "40" ;
let num2= "25";
if (num > num2) {
    console.log (num + " is the largest number")
} else if (num2 > num) {
    console.log (num2 + " is the largest number")
} else {
    console.log("Both numbers are equal")
}

//Question 4
let percentage = "85" ;
if (percentage >= 80) {
    console.log("Grade A")
} else if  (percentage <= 70) {
    console.log ("Grade B")
} else if (percentage <=60 ) {
    console.log ("grade C")
}
//question 5
let year = "2024";
if (year % 400 === 0) {
    console.log("Leap year");
} else if (year % 100 === 0) {
    console.log ("not a leap year") ;
} else if (year % 4 === 0) {
     console.log(" leap year");
} else {
    console.log ("not a leap year") ;
}

//Question 6

let day = "3";
switch (day) {
    case 1 :
        console.log ("monday") ;
        break ;
        case 2 :
            console.log ("tuesday") ;
            break ;
            case 3 :
                console.log("wednesday") ;
                break ;
                case 4 :
                    console.log ("thursday") ;
                    break ;
                    case 5 :
                        console.log("friday") ;
                        break ;
                        case 6 :
                            console.log ("saturday");
                            break ;
                            case7 : 
                            console.log("sunday");
                            break ;
}
//question 7
let num7 = "5";
let num8 = "20";
let operator ="*";
switch (operator) {
    case " +" :
        console.log(num7 + num8);
        break;
        case"-":
        console.log (num7 - num8);
        break ;
        case "*":
            console.log (num7 * num8);
            break ;
            case "/":
                 console.log (num7 /num8);
                 break ;

}

//Question 8

let letter = "a";
switch  (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}


//Question 9
let light = "red";
switch (light) {
    case "red":
    console.log("stop");
    break ;
    switch (light) {
        case "yellow ":
        console.log ("ready");
        break ;
        switch (light) {
            case "green":
                console.log ("go");
                break ;
        }
    }
}

//Question 10
let choice = 2;
switch (choice) {
    case 1 :
        console.log ("your balance is 1000");
        break ;
        
            case 2 : 
            console.log ( "deposit selected");
            break ;
            case 3 : 
            console.log ("withdraw slected");
            break ;
            case 4 :
                console.log ("exiting ....");
                break ;
                default :
                console.log ("invalid choice");
    }

