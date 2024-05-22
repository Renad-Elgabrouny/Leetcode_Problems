class Solution(object):
    def longestCommonPrefix(self, strs):
        strs.sort()
        print(strs)
        common_prefix=\\
        first_str=strs [0] 
        last_str=strs [-1]
        for i in range(min(len(last_str),len(first_str))):
            if first_str[i]==last_str[i]:
                common_prefix+=first_str[i]
            else:
                break

        return common_prefix
        