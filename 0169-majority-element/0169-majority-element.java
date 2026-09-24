class Solution {
    public int majorityElement(int[] nums) {
        int returnValue=0 ,count=0;
        for(int i=0;i<nums.length;i++){
            if( count==0){
                returnValue = nums[i];
            };
            if(returnValue==nums[i]){
                count++;
            }else{
                count--;
            }

        };
        return returnValue;
        
    }
}