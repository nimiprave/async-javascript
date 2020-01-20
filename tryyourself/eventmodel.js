//demonstrating of why the single threaded event model in javascript. 
/*

for(var i = 1; i <= 3; i++){
  setTimeout(function( ){            
     console.log( i );
  }, 0 );
 
} 

// output is 4,4,4 .. Why?

function show( x ){
    console.log(x);
};
*/


for(var i = 1; i <= 3; i++){
  setTimeout(function( i ){  
     console.log("inside time out function"); 
     console.log( typeof( i ));
     //console.log( i );
  }, 0 );
 
}

//show( 2 );
//var i = 10;
for(let i = 1; i <= 3; i++){
  setTimeout(function( i ){            
     console.log(i)
;  }, 0 );
 
}

// show is not recognized as a function
/*
for(var i = 1; i <= 3; i++){
  setTimeout( show , 0 );
}
*/

