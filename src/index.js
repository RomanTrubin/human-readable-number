const { parse } = require("semver");

module.exports = function toReadable(number) {
    const oneDischarge = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const twoDischarge = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const threeDischarge = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let result = "";
    if (number === 0) {
        result = 'zero'}
    else if (number < 10) {
        result = oneDischarge[number - 1];
    } else if(number<20) {
        result = twoDischarge[number - 10];
    }

    else if(number<100) {
        if ((number % 10)===0) {
            result = threeDischarge[Number(String(number)[0])-2]
        }
        else { result = threeDischarge[Number(String(number)[0])-2] + ' ' + oneDischarge[Number(String(number)[1])-1]}
       
    }
    else if(number<1000) {
        if((number % 100)===0) {
            result = oneDischarge[Number(String(number)[0])-1] + ' hundred'    
        }
        else if((number % 10)===0) {
            if((number % 100)===10) { 
                result = oneDischarge[Number(String(number)[0])-1] + ' hundred ' + 'ten' 
            } else {
                result = oneDischarge[Number(String(number)[0])-1] + ' hundred ' + threeDischarge[Number(String(number)[1])-2] 
            }
              
        }
       else if((number % 100)<10) {
            result = oneDischarge[Number(String(number)[0])-1] + ' hundred ' + oneDischarge[Number(String(number)[2])-1]    
        } else if((number % 100)<20) {

            result = oneDischarge[Number(String(number)[0])-1] + ' hundred ' + twoDischarge[Number(String(number)[2])]    
        }
        
        else {
            result = oneDischarge[Number(String(number)[0])-1] + ' hundred ' +  threeDischarge[Number(String(number)[1])-2] + ' ' + oneDischarge[Number(String(number)[2])-1]
    }
}
    
    console.log(result);
    return result;
};

