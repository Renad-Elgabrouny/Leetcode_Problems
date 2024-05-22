class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int>ans;
        set<int>unique_numbers;
        for(int i=0;i<nums.size();++i){
            unique_numbers.insert(nums[i]);
        }
        for(int i=0;i<nums.size();i++){
            if(!unique_numbers.count(i+1))ans.push_back(i+1);
        }
        return ans;
    }
}; 
