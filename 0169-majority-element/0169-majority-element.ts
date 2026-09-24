function majorityElement(nums: number[]): number {
    let returnValue:number = null;
    let count:number=0;

    for(let num of nums){
        if(count===0){
            returnValue=num;
        }
        if(returnValue===num){
            count++;
        }else{
            count--;
        }
    }
    return returnValue;
};