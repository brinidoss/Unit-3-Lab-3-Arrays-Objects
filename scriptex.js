// TASK ONE

let arrayOfIntegers = [];

function createRange (start, end) {
   
    for (start = start; start <=end; start ++) {
        arrayOfIntegers.push(start);
    }
    return arrayOfIntegers;
}

console.log(createRange(2,7));


// TASK TWO

// let object = {};
// object[array] = #;

// for (let i = 0; i < array.length; i++)
//     if (!.includes)

let returnedObject = {};

let desserts = ['chocolate', 'cheesecake', 'ice cream', 'cheesecake', 'pie', 'pie', 'pie'];

function countElements (array) {
    
    for (i = 0; i < array.length; i++) {
        let returnedObject = {};
        let counter = 1;
        
        !returnedObject.hasOwnProperty(array[i]) ? returnedObject[array[i]] = counter : counter=counter++
             
           
        

         return returnedObject; 
    }

       // return returnedObject;
}

console.log(countElements(desserts));
