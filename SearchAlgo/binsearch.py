def binary_search(list, item):
    low - 0
    high = len(list) - 1

    while low <= high:
        mid = (low+high)
        guess = list[mid]

        if guess == item:
            return mid
