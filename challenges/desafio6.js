db.produtos.find({
  $and: [{ curtidas: { $gt: 10 } }, { curtidas: { $lt: 100 } }],
}, { nome: 1, curtidas: 1, _id: false });