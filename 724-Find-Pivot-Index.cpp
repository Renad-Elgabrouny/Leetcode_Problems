class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        long long  prefix_sum_l[nums.size()];
        long long prefix_sum_r[nums.size()];
        prefix_sum_l[0]=nums[0];
        prefix_sum_r[nums.size()-1]=nums[nums.size()-1];

        for(int i=1;i<nums.size();++i){
            prefix_sum_l[i]=nums[i]+prefix_sum_l[i-1];
        }

        for(int i=nums.size()-2;i>=0;--i){
            prefix_sum_r[i]=nums[i]+prefix_sum_r[i+1];
        }

        for(int i=0;i<nums.size();i++){
            if(prefix_sum_r[i]==prefix_sum_l[i])return i;
        }
        return -1;
    }
};