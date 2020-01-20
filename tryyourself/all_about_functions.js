
// building using closure. 

// self invoking function calling the coding anonymous function. 
(function show( ){
    console.log('inside function');
})();


// declarative function will not be called by itself. 
function show(){
    console.log('declarative function');
}
show( );


// function expression based on anonymous function 
var show1 =  function (){ console.log('function expression');}
show1( );

//returning functions. 

function multiple( a, b ){
    return a * b;
}

// functions can be used in expressions. 
console.log( multiple( 4 , 5) * 5 );


// functions are objects, it has properties and methods .. see the example 
// below.

console.log( typeof( multiple ) );

// property of the function object. Arguments is the property of the function 
function unknownparams( ){
    return arguments.length;
}
console.log( unknownparams(1,2,3,4,5) );
console.log( unknownparams(1,2) );

// acessing the mehtodof the 
console.log( unknownparams.toString( ));

//arrow function.. we can remove function keyword and return key word.
//ES5
var x = function(x, y) {
  return x * y;
}

//es6
const z = (a,b) => a * b;
console.log( z(3,2) );