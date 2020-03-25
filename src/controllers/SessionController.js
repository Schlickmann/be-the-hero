const connection = require('../database/connection');

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "NGO's id is required."})
    }

    const ngo = await connection('ngos')
                        .where('id', id)
                        .select('name')
                        .first();

    if (!ngo) {
      return res.status(400).json({ error: 'No NGO found with this ID. Please review your credential.'})
    }

    return res.json(ngo);
  }
}

module.exports = new SessionController();