CREATE VIEW estatisticas_musicais AS
SELECT
(SELECT COUNT(can.nome)
FROM SpotifyClone.cancoes can) AS 'cancoes',
(SELECT COUNT(art.nome)
FROM SpotifyClone.artista art) AS 'artistas',
(SELECT COUNT(alb.nome)
FROM SpotifyClone.album alb) AS 'albuns';
