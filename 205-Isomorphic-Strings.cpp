class Solution {
public:
    bool isIsomorphic(string s, string t) {
        map<char,int> mp_s;
        map<char,int> mp_T;
        for(int i=0;i<t.size();++i){
            if(mp_s[s[i]])continue;
            mp_s[s[i]]=i;
            mp_T[t[i]]=i; 
        }
        for(int i=0;i<t.size();++i){
            if(mp_s[s[i]]!=mp_T[t[i]])return false;
        }
        return true;

    }
};