class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(t.size()==s.size()){
            if(s==t)return true;
            else return false;
        }
        long long indices_s=0;
        long long indicesT=0;
        while(indices_s<s.size() && indicesT<t.size()){
            if(s[indices_s]==t[indicesT]){
                indices_s++;
                indicesT++;
            }
            else indicesT++;
        }
        if(indices_s==s.size())return true;
        else return false;

        
    }
};