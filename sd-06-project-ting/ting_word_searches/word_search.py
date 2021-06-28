def exists_word(word, instance):
    words = []
    file_length = instance.__len__()

    # [['ola mundo', 'mundo ola'], ['milharal turma', 'turma do milharal']]
    for i in range(file_length):
        parts_file = instance.search(i)
        occurrence = []

        # ['ola mundo', 'mundo ola']
        for j in range(len(parts_file)):
            parts_text = parts_file[j]

            if word in parts_text:
                occurrence.append({"linha": j + 1})

            if len(occurrence) > 0:
                format_info = {
                    "palavra": word,
                    "arquivo": parts_file,
                    "linhas_do_arquivo": occurrence,
                }
                words.append(format_info)
    return words


def search_by_word(word, instance):
    words = []
    file_length = instance.__len__()

    # [['ola mundo', 'mundo ola'], ['milharal turma', 'turma do milharal']]
    for i in range(file_length):
        parts_file = instance.search(i)
        occurrence = []

        # ['ola mundo', 'mundo ola']
        for j in range(len(parts_file)):
            parts_text = parts_file[j]

            if word in parts_text:
                occurrence.append({"linha": j + 1, "conteudo": parts_file[j]})

            if len(occurrence) > 0:
                format_info = {
                    "palavra": word,
                    "arquivo": parts_file,
                    "linhas_do_arquivo": occurrence,
                }
                words.append(format_info)
    return words
