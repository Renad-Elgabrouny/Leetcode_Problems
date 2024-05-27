class Solution {
public:
    int customLowerBound(vector<int>& sortedNums, int x) {
    int left = 0;
    int right = sortedNums.size();
    
    while (left < right) {
        int mid = (left +right) / 2;
        if (sortedNums[mid] >= x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}
    int specialArray(vector<int>& nums) {
    int n = nums.size();
    sort(nums.begin(), nums.end()); 
    vector<int> result(n + 1); 
    for (int x = 0; x <= n; ++x) {
        int pos = customLowerBound(nums, x);
        result[x] = nums.size() - pos;
    }
        for(int i=0;i<=n;++i){
            if(result[i]==i)return i;
        }
        
        return -1;
        }
};