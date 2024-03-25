class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        ans=[]
        d={}
        for i in nums:
            if i in d:
                ans.append(i)
            else:
                d[i]=1
        return ans

        