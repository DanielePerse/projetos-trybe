def study_schedule(start_time, end_time, target_time):
    list_tuplas = []
    for start_time, end_time in zip(start_time, end_time):
        list_tuplas.append((start_time, end_time))

    result = 0
    for i in list_tuplas:
        if i[0] <= target_time <= i[1]:
            result += 1

    return result
