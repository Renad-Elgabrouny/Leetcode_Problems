class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        m={}
        m[nums[0]]=1
        k=1
        j=1
        for i in range(1,len(nums)):
            if nums[j] in m:
                if m[nums[j]] < 2 :
                    m[nums[j]]+=1
                    k+=1
                else: 
                    del nums[j]
                    nums.append('_')
                    j-=1
            else:
                m[nums[j]]=1
                k+=1 
            j+=1
            
        print(k)
        print(nums)
        return k

    
                
                

        