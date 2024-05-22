class Solution {
public:
    int maxNumberOfBalloons(string text) {
        int freq[26]={0};
        for(int i=0;i<text.size();++i){
            freq[text[i]-'a']++;
        }
        long long ans=min(freq[0],min(freq[1],min(freq[13],min(freq[11]/2,freq[14]/2))));
        cout<<ans<<endl;
        return ans;


    }
};