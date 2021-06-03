from math import floor


def is_palindrome_iterative(word):
    if not word:
        return False

    length_word = len(word)
    to = floor(length_word/2)

    for i in range(to):
        substring = word[i:length_word - i]
        if substring[0] != substring[-1]:
            return False

    return True
