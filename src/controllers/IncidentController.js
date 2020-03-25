const connection = require('../database/connection');

class IncidentController {
  async store(req, res) {
    const { title, description, value } = req.body;
    const ngo_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({ title, description, value, ngo_id });

    return res.json({ id });
  }

  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  }
}

module.exports = new IncidentController();