def is_anagram(first_string, second_string):
    array1 = sorted(first_string)
    array2 = sorted(second_string)

    if len(array1) == 0 or len(array2) == 0 or len(array1) != len(array2):
        return False

    for i in range(len(array1)):
        if array1[i] != array2[i]:
            return False

    return True
