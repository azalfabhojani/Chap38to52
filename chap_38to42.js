// alert("azal");

// document.write("<h1>chapter 38 to 42</h1>");
// document.write("<h2> Function, Switch Statement, While.. Dowhile loops</h2>");

// Q1
/*function power(a,b){
    document.write("value of a is : " + a +"<br>");
    document.write("value of b is " +b+"<br>");
    var product = 1;
    for(var i = 1; i<=b; i++){
        product = product * a;
    }
    document.write("The value of "+" " + a +" "+"raised to "+" " +b+ +""+" is: " + product );
}
var num1 = +prompt("Enter  first number");
var num2 = +prompt("Enter second number");
power(num1 , num2);*/

// Q2
/*var year = prompt("Enter the year to find it is leap year or not")
 function lyear(year)
 {
     let y = parseInt(year)
     if(y%4==0)
     {
         return `${year} is the leap Year`
     }
     else{
         return `${year} is not the leap year`
     }
}
document.write(lyear(year))*/

/*Q3
var side1 = +prompt("Enter the value of first side");
var side2 = +prompt("Enter the value of second side");
var side3 = +prompt("Enter the value of third side");
var S;
var area;

function calculateS(a, b, c) {
        x = (a + b + c) / 2;
        return x
    }
    
function calculatingArea(a, b, c) {
        S = calculateS(a, b, c);
        area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
        return document.write("Area of triangle is : " + area);
    }
        
calculatingArea(side1, side2, side3);*/


// Q4

// var sub1 = prompt("Enter your marks taken in chemistry")
// var sub2 = prompt("Enter your marks taken in physics")
// var sub3 = prompt("Enter your marks taken in Maths")
// var total = 300;

// function mainfunction(aver,per){
//     return `The average of you marks = ${Math.floor(aver)} <br>The percentage is: ${Math.floor(per)}%`
// }

// function calAver(sub1,sub2,sub3){
//     let a = parseInt(sub1)
//     let b = parseInt(sub2)
//     let c = parseInt(sub3)

//     return ((a+b+c)/3)
// }
// var aver = calAver(sub1,sub2,sub3);

// function calPer(sub1,sub2,sub3,total)
// {
//     let a = parseInt(sub1) , b = parseInt(sub2) , c = parseInt( sub3)
//     return (((a+b+c)/total)*100)

// }
// var per = calPer(sub1,sub2,sub3,total);
// document.write( mainfunction(aver,per))

// Q5
/*function checkIndexOf(word, character) {
        word = prompt("Please enter word");
        document.write("Entered word is : " + word + "<br><br>");
        character = prompt("Please enter character to find indexOF");
        document.write("Character to find the indexOf : " + character + "<br><br>")
        for (let i = 0; i < word.length; i++) {
            if (word[i] === character) {
                return document.write("indexOf " + character + " is : " + i);
            }
        }
        return -1;
    }
    checkIndexOf();*/

// Q6. ("<delete all vowels>")

// var str = "The quick brown fox jumps over the lazzy dog"
// function delVowel(str)
// {
//  return str.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","")
// }
// document.write("removing vowels: "+delVowel(str))
    
// Q7.
 /*function findOccurrences() {
        var str = "Please read this application and give me gratuity";
        document.write("Sentence is: " + str + "<br><br>")
        var count = 0;
        let haveSeenVowel = false;
    
        for (const letter of str.toLowerCase()) {
            switch (letter) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    {
                        if (haveSeenVowel) {
                            count++;
                            haveSeenVowel = false;
                        } else {
                            haveSeenVowel = true;
                        }
                        break;
                    }
                default:
                    haveSeenVowel = false
            }
        }
    
        return document.write("The number of occurrences is: " + count);
    }
    findOccurrences();*/
    
// Q8.
/*let distance = prompt("Enter the distance between Hyderabad and karachi in KiloMeter\n:)")
function meter(distance) {
    let m = Number(distance)
    return (m * 1000) + " Meters"
}
function feet(distance) {
    let f = Number(distance)
    return (f * 3280) + " Feet"
}
function inches(distance) {
    let i = Number(distance)
    return (i * 39370) + " Inches"
}
function cm(distance) {
    let c = Number(distance)
    return (c * 100000) + " Centimeters"
}
document.write(meter(distance), feet(distance), inches(distance), cm(distance));*/


// Q9
/* var time = prompt("Enter your time worked this week")

function overTime(time){
    if(time>40)
    {
        let a = Number(time)
        let i = a-40
        return (i*12)
    }
    else
    {
        return 0;
    }
}
console.log("This week your income of over time is:Rs.",overTime(time))*/




// Q10
// let amount = prompt("please enter amount for withdraw",000)

// function curr(amount)
// {
//     let a = amount.split("")
//     var b;

//     if(a[1]>5)
//     {
//          b ="1 fifty notes "+(a[1]-5)+" ten notes"
//     }
//     else if(a[1]<5)
//     {
//          b = a[1]+" ten notes";
//     }
//     else
//     {
//         b="1 fifty notes";
//     }
//     return "You will have "+a[0]+" hundred notes "+b
// }
// document.write(curr(amount))





