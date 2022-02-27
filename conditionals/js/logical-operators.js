// || (OR)
/* 
There are four possible logical combinations:

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false */

let hour = 9;

if(hour < 10 || hour > 18) {
    console.log('the office is closed')
}

let hours = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
    console.log('closed!')
}

// OR "||" finds the first truthy value
/* alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value) */

//example:
let firstName = '';
let lastName ='';
let nickName = 'SuperCode';
console.log(firstName || lastName || nickName || 'Anonymous');// SuperCode


/* *********************************************************************************** */
// AND (&&) logical operator:
// In classical programming, AND returns true if both operands are truthy and false otherwise:

/* alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false */

let hora = 13;
let minutes = 55;

if(hora == 13 && minutes == 55) {
    console.log('the time is 13:55')
}
/* *************************************************************************************** */
// !(NOT)
/* The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value. */
/* 
alert( !true ); // false
alert( !0 ); // true
A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false */

//Exercise


let login = prompt("who's there?");
let usr = "Admin";
let pwd = 'theMaster';
if(login == false || login == null) {
    alert('canceled')
}else if (login != usr) {
    alert('I dont know you')
}else {
    login = prompt('password?')
    if(login == null || login == false) {
        alert('canceled')
    }else {
        login == pwd ? alert('Welcome') : alert('wrong password')

    }
}