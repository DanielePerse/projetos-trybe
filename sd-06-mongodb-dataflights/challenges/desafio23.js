db.voos.find({ $and: [{ litrosCombustivel: { $lt: 1000 } },
  { litrosCombustivel: { $ne: null } }] }, { _id: 0, vooId: 1, litrosCombustivel: 1 }).limit(1);
