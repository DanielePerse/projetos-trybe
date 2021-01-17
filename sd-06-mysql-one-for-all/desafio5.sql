CREATE VIEW top_2_hits_do_momento AS
SELECT
c.nome AS 'cancao',
COUNT(u.nome) AS 'reproducoes'
FROM SpotifyClone.historico_de_reproducao AS h
INNER JOIN SpotifyClone.cancoes AS c
ON h.cancoes_id = c.cancoes_id
INNER JOIN SpotifyClone.usuario AS u
ON h.usuario_id = u.usuario_id
GROUP BY c.nome
ORDER BY
reproducoes DESC,
cancao
LIMIT 2;
