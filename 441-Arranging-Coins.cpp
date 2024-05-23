class Solution {
public:
    int arrangeCoins(int n) {
        long long left=1,right=n,mid=0;
        while(left<=right){
            mid=(left+right)/2;
            cout<<mid;
            if((mid*(mid+1)/2)==n) return mid;
            if((mid*(mid+1)/2)>n){
                right=mid-1;
            }else left=mid+1;
        }
        return right;
    }
};