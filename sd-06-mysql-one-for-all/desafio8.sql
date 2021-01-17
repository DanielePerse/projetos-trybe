DROP TRIGGER IF EXISTS trigger_usuario_delete;
DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuario
FOR EACH ROW
BEGIN
DELETE FROM historico_de_reproducao WHERE usuario_id = OLD.usuario_id;
DELETE FROM seguindo_artistas WHERE usuario_id = OLD.usuario_id;
END;
$$ DELIMITER ;
