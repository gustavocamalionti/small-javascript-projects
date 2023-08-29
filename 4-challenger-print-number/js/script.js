let valueEnd = 200;
let valueInit = 1;
let valueIncrement = 1;

function printNumberCondition(valueInit, valueEnd,valueIncrement){
    for (let i = valueInit; i <= valueEnd; i += valueIncrement) {

        if ((i % 4 == 0) && (i % 7 == 0)){
            console.log('xxxyyy');
            continue;
        }
        if (i % 4 == 0){
            console.log('xxx');
            continue;
        }
    
        if (i % 7 == 0){
            console.log('yyy');
            continue;
        }
    
        console.log(i);
    
    }
}

printNumberCondition(valueInit, valueEnd, valueIncrement);