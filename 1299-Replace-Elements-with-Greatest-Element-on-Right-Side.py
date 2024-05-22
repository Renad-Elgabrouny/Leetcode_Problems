class Solution(object):
    def replaceElements(self, arr):
        n=len(arr)
        b=arr[n-1]
        arr2=[0]*n
        arr2[n-1]=-1
        for i in range(n-2, -1, -1):
            b=max(arr[i+1],b)
            arr2[i]=b
        return arr2

        