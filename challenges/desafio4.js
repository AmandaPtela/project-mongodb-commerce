
db.produtos.find({ $and: [{ vendidos: { $gt: 50 } }, { vendidos: { $lt: 100 } }] }, { name: 1, vendidos: 1 }).sort({ vendidos: 1 });