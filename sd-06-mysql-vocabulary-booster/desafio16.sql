USE hr;
DELIMITER $$

DROP FUNCTION IF EXISTS buscar_quantidade_de_empregos_por_funcionario;

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA BEGIN
DECLARE total_empregos INT;
SELECT
COUNT(j.JOB_ID)
FROM hr.employees AS e
INNER JOIN hr.job_history AS j
ON e.EMPLOYEE_ID = j.EMPLOYEE_ID
WHERE e.EMAIL = email
INTO total_empregos;
RETURN total_empregos;
END $$
DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR') AS 'total_empregos';
