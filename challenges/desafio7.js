db.produtos.find({
  $and: [{ curtidas: { $ne: 50 } }, { tags: { $exists: false } }],
}, { nome: 1, vendidos: 1, _id: false });