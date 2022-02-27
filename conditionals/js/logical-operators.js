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

