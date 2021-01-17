DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA BEGIN
DECLARE total_historico_reproducao INT;
SELECT COUNT(cancoes_id)
FROM SpotifyClone.historico_de_reproducao
WHERE historico_de_reproducao.usuario_id = id INTO total_historico_reproducao;
RETURN total_historico_reproducao;
END $$
DELIMITER ;
