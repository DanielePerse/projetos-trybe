db.voos.find({ vooId: { $gt: 0 } }, { _id: 0, vooId: 1 }).limit(3).skip(9);
