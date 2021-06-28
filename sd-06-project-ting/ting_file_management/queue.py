from collections import deque


class Queue:
    def __init__(self):
        self.head_value = deque()

    def __len__(self):
        return len(self.head_value)

    def enqueue(self, value):
        self.head_value.append(value)

    def dequeue(self):
        return self.head_value.popleft()

    def search(self, index):
        if index < 0:
            raise IndexError
        return self.head_value[index]


"""
https://docs.python.org/3/library/collections.html#collections.deque
"""
