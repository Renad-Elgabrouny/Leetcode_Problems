class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        set<string>different_emails;
        for(int i=0;i<emails.size();i++){
            string email=emails[i];
            string new_email="";
            size_t pos = email.find('@');
            for(int j=0;j<pos;j++){
                if(email[j]=='.')continue;
                if(email[j]=='+')break;
                new_email+=email[j];
            }
            new_email += email.substr(pos);
            different_emails.insert(new_email);

        }
        return different_emails.size();
    }
};