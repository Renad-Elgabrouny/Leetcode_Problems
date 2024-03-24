class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        n1 = [0] * 26
        n2 = [0] * 26
        for i in range(len(s)):
            n1[ord(s[i]) - ord('a')] += 1
            n2[ord(t[i]) - ord('a')] += 1

        if n1==n2:
            return True
        else:
            return False
