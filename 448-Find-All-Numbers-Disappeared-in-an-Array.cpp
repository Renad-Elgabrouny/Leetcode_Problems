class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int>ans;
        int check_num[100003]={0};
        for(int i=0;i<nums.size();++i){
            check_num[nums[i]]=1;
        }
        for(int i=1;i<=nums.size();i++){
            if(!check_num[i])ans.push_back(i);
        }
        return ans;
    }
}; 
