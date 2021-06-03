def is_palindrome_recursive(word, low, high):
    if not word:
        return False

    if len(word) == 1:
        return True

    if word[low] == word[high]:
        substring = word[1:len(word) - 1]
        return is_palindrome_recursive(substring, 0, len(substring) - 1)

    return False
