const Card = require('../models/card');
const Client = require('../models/client');

const getAll = async ()     => await Card.find();
// consulto los clientes y sus cuentas (.populate('accounts'))
const getOne = async (id)   => await Card.findById(id);
const count  = async ()     => await Card.count();

// guardo el nuevo cliente
const save   = async (body) => {
   const card = new Card({
      cardholder: body.cardholder,
      type      : body.type,
      color     : body.color,
      number    : body.number,
      cvv       : body.cvv,
      thruDate  : body.thruDate,
      fromDate  : body.fromDate,
      client    : body.client,
   })

   const newcard = await card.save();
   const client = await Client.findById(newcard.client);
   client.cards.push(newcard._id);
   await Client.updateOne({_id: client._id}, {cards: client.cards});
   return card;
}

module.exports = {
   getAll,
   getOne,
   count,
   save
}