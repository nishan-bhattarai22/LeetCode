/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {



    let answer = [];

    //Solutions with Recurssion
    // const repeat = (num) => {
    //     let divisor = 1;
    //     if (num < 10) {
    //         answer.push(num);
    //         return;
    //     }
    //     while (num >= divisor * 10) {
    //         divisor = divisor * 10;
    //     }
    //     if (num > 10) {
    //         answer.push(Math.floor(num / divisor));
    //         repeat(num % divisor);
    //     } else {
    //         answer.push(num)
    //     }

    // }

    // for (let num of nums) {

    //     repeat(num);
    // };

    //Solutions with String

    for (let num of nums) {
        let digits = String(num);

        for (let digit of digits) {
            answer.push(Number(digit))
        }
    }




    return answer;



};