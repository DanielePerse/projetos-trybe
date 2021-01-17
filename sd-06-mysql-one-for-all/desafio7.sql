CREATE VIEW perfil_artistas AS
SELECT
ar.nome AS 'artista',
al.nome AS 'album',
(SELECT
COUNT(s.usuario_id)
FROM SpotifyClone.seguindo_artistas AS s
WHERE s.artista_id = ar.artista_id
) AS 'seguidores'
FROM SpotifyClone.album AS al
INNER JOIN SpotifyClone.artista AS ar
ON al.artista_id = ar.artista_id
ORDER BY
seguidores DESC,
artista,
album;
