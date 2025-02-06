def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def Selection(arr):
    NewArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        NewArr.append(arr.pop(smallest))
    return NewArr

print(Selection([5, 7, 8, 3, 5]))



