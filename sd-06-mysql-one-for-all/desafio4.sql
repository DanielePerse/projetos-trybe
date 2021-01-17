CREATE VIEW top_3_artistas AS
SELECT
a.nome AS 'artista',
COUNT(u.nome) AS 'seguidores'
FROM SpotifyClone.seguindo_artistas AS s
INNER JOIN SpotifyClone.artista AS a
ON s.artista_id = a.artista_id
INNER JOIN SpotifyClone.usuario AS u
ON s.usuario_id = u.usuario_id
GROUP BY a.nome
ORDER BY
COUNT(u.nome) DESC,
a.nome
LIMIT 3;
