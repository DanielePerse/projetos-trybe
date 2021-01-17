SELECT
ContactName AS 'Nome',
Country AS 'País',
(SELECT
COUNT(Country) - 1
FROM w3schools.customers AS t2
WHERE t2.Country = t1.Country
GROUP BY Country) AS 'Número de compatriotas'
FROM w3schools.customers AS t1
WHERE (SELECT
COUNT(Country)
FROM w3schools.customers AS t2
WHERE t2.Country = t1.Country
GROUP BY Country) > 1
ORDER BY ContactName;
