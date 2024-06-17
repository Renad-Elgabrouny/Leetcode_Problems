class Solution {
public:
    bool judgeSquareSum(long long c) {
        long long left=0,right=sqrt(c);
        while(left<=right){
           if(right*right+left*left==c)return true;
           if(right*right+left*left>c)right--;
           else left++; 
        }
        return false;


    }
};