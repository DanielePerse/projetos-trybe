db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: db.voos.find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }).count() });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
