def binary(arr, n):
    
    lo = 0
    hi = len(arr)
    while lo < hi:

        mid = lo + (hi-lo)/2
    
        v = arr[int(mid)]


        if v == n:
            return True
            break
        elif v < n:
            lo = mid + 1
        else:
            hi = mid

array = [2, 4, 6, 7, 8, 9]
k = 4
print(binary(array, k))
