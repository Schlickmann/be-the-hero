const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

class NGOSController {
  async store(req, res) {
    const { name, email, whatsapp, city, state, country } = req.body;

    const id = generateUniqueId();

    await connection('ngos').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state,
      country
    });

    return res.json({ id });
  }

  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  }
}

module.exports = new NGOSController();