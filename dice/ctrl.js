const knex = require('../connection.js')


const getBag = async (req, res, next) => {
  let users = await knex.select('*').from('users')
  console.log({ users });
  res.json('get bag');
}

module.exports = {
  getBag
}
