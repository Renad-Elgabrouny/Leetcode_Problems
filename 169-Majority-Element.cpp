class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int majority_element=0;
        int count_majority_element=0;
        for(int i=0;i<nums.size();i++){
            if(!count_majority_element){
                count_majority_element++;
                majority_element=nums[i];
                continue;
            }
            if(majority_element==nums[i]) count_majority_element++;
            else count_majority_element--; 
        }
        return majority_element;
        
    }
};