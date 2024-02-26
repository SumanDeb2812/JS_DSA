function findEvenOdd(array){
    let countOdd = 0;
    let countEven = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] & 1 == 1){
            countOdd++;
        }else{
            countEven++;
        }
    }

    console.log("Count of even number: " + countEven);
    console.log("Count of odd number: " + countOdd);
}

findEvenOdd([1, 2, 6, 9, 11])