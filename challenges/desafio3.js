db.produtos.find({}, { nome: 1, quantidade: 1 }).sort({ vendidos: -1 }).limit(1);