let mixString = [ '71826125', '3420a4a3', 'c2a9640a', '89da6813', '5jf6t' ];
let secretLength = 5;

let encodedString = mixString.join('');

let key = encodedString.substring(0, encodedString.length - secretLength);
