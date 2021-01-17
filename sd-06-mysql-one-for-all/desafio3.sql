CREATE VIEW historico_reproducao_usuarios AS
SELECT
u.nome AS 'usuario',
c.nome AS 'nome'
FROM SpotifyClone.historico_de_reproducao AS h
INNER JOIN SpotifyClone.usuario AS u
ON h.usuario_id = u.usuario_id
INNER JOIN SpotifyClone.cancoes AS c
ON h.cancoes_id = c.cancoes_id
ORDER BY
u.nome,
c.nome;
