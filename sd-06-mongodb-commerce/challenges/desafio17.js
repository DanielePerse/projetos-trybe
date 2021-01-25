db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.count({ $text: { $search: "frango hamburguer" } });

// https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/
