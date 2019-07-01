var c = {greeting : 'Hello'};
var d;
d = c;
console.log(c);
console.log(d);

// equal operator sets up new memory space (new address)
c = {greeting: "Hola"};
console.log(c);
console.log(d);