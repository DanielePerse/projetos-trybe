import sys


def txt_importer(path_file):
    if path_file.split(".", 1)[1] != "txt":
        sys.stderr.write("Formato inválido\n")
    try:
        file = open(path_file, "r")
        file_read = file.read()
        return file_read.split("\n")
    except FileNotFoundError:
        sys.stderr.write(f"Arquivo {path_file} não encontrado\n")


"""
http://devfuria.com.br/python/manipulando-arquivos-de-texto/
https://www.delftstack.com/pt/howto/python/how-to-check-if-a-file-exists-in-python/
https://docs.pytest.org/en/6.2.x/capture.html
https://app.betrybe.com/course/computer-science/estrutura-de-dados-pilhas-filas-e-listas/pilhas/c52e6de5-c909-4dc4-9f4a-6c46e358a383/conteudos/b17e5b9e-7b3f-4d9f-95cf-894d7264907f/utilizando-pilhas/ef386088-f83c-4a90-ba54-db78f2701f56?use_case=side_bar
"""
