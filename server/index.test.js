import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mockServer
} from 'graphql-tools';

const testCaseA = {
  id: 'Test case A',
  query: `
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
    }
  `,
  variables: {},
  context: {},
  expected: { data: {
        "id": "43447503",
        "name": "Akıllı Saat B08 Smart Watch Arama Cevaplama Sos Tam Dokunmatik Pembe",
        "image": "https://cdn.dsmcdn.com/ty6/product/media/images/20200716/11/4596645/77043792/0/0_org_zoom.jpg",
        "price": 228,
        "url": "https://www.trendyol.com/koctech/akilli-saat-b08-smart-watch-arama-cevaplama-sos-tam-dokunmatik-pembe-p-43447503?boutiqueId=518609&merchantId=184171",
        "liked": false,
        "cargo": {
          "type": 1,
          "name": "Ücretsiz Kargo"
        } } },
};

describe('Schema', () => {
  // Array of case types
  const cases = [testCaseA];

  const mockSchema = makeExecutableSchema({ typeDefs });

  // Here we specify the return payloads of mocked types
  addMockFunctionsToSchema({
    schema: mockSchema,
    mocks: {
      Boolean: () => false,
      ID: () => '1',
      Int: () => 1,
      Float: () => 12.34,
      String: () => 'Dog',
    }
  });

  test('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);

      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });

  cases.forEach(obj => {
    const { id, query, variables, context: ctx, expected } = obj;

    test(`query: ${id}`, async () => {
      return await expect(
        graphql(mockSchema, query, null, { ctx }, variables)
      ).resolves.toEqual(expected);
    });
  });

});
