def linear_search(arr, k):
    for i in arr:
        if i == k:
            return True
    return False


array = [1,2, 4, 5, 8]
n = 8

print(linear_search(array, n))
