class Solution {
public:
    vector<string> split(string& s, char delimiter) {
    vector<string> words;
    string word;
    istringstream iss(s);
    while (getline(iss, word, delimiter)) {
        words.push_back(word);
    }
    return words;
}

    bool wordPattern(string pattern, string s) {
    vector<string>words=split(s,' ');
    if(words.size()!=pattern.size())return false;
    map<string,int>mp1;
    map<char,int>mp2;
    int cnt1=1,cnt2=1;
    for(int i=0;i<words.size();++i){
        if(!mp1[words[i]]){
            mp1[words[i]]=cnt1;
            cnt1++;
        }
        if(!mp2[pattern[i]]){
            mp2[pattern[i]]=cnt2;
            cnt2++;
        }
    }
    for(int i=0;i<words.size();++i){
        if(mp1[words[i]]!=mp2[pattern[i]])return false;

    }
    return true;

    }
};