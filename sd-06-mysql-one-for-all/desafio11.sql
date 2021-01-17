CREATE VIEW cancoes_premium AS
SELECT
c.nome AS 'nome',
COUNT(h.usuario_id) AS 'reproducoes'
FROM SpotifyClone.historico_de_reproducao AS h
INNER JOIN SpotifyClone.cancoes AS c
ON h.cancoes_id = c.cancoes_id
INNER JOIN SpotifyClone.usuario AS u
ON h.usuario_id = u.usuario_id
WHERE h.cancoes_id = c.cancoes_id AND
u.plano_id BETWEEN 2 AND 3
GROUP BY nome
ORDER BY nome;
