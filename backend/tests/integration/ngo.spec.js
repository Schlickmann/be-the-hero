const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
                      .post('/ngos')
                      .send({
                        name: "Green Peace1",
                        email: "greenpeace@ngo.com",
                        whatsapp: "8009999999",
                        city: "Vancouver",
                        state: "BC",
                        country: "Canada"
                      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});