const rp = require('request-promise')

const API = 'http://localhost:4000/';

describe('Getting shop items', () => {

  it('Retrieves the shop items in default order', async () => {
    const query = `
    query {
    products {
      id
      name
      image
      price
      url
      liked
      cargo {
        type
        name
      }
    }
  }`;

    const response = await rp({ method: 'POST', uri: API, body: { query }, json: true });
    expect(response).toMatchSnapshot();
  });
});
