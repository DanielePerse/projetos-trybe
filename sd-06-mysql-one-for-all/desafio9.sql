DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN nome VARCHAR(50)) BEGIN
SELECT
ar.nome AS 'artista',
al.nome AS 'album'
FROM SpotifyClone.album AS al
INNER JOIN SpotifyClone.artista AS ar
ON al.artista_id = ar.artista_id
WHERE ar.nome = nome
ORDER BY al.nome; 
END $$
DELIMITER ;
