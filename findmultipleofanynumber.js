function printNumbers(l,h){// l is a lower numer and h is a heighest number here l=1 and h=100

for(let i=l;i<=h;i++){
 if(i%3===0 && i%5===0){ //check if number is mutiple of both 3 and 5
       console.log('FizzBuzz');
     }
else if(i%3===0){   //check if number is multiple of 3
       console.log('Fizz');
     }
else if(i%5===0){   //check if number is multiple of 5
        console.log('Buzz');
     }
else{
        console.log(i);
    }
 }
};
