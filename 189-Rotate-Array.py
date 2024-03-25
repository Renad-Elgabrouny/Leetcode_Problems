class Solution:
    def revers(self, nums: List[int],start: int,end:int)-> None:
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k %= n 
        self.revers(nums,0, n - 1)
        self.revers(nums,0, k - 1)
        self.revers( nums,k, n - 1)
        