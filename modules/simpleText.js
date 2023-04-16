//SAMPLE TEXT FROM AN ENDPOINT

const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
      'nice.oven': true,
    },
    livingroom: {
      amenities: [
        {
          couch: [
            ['large', {dimensions: [20, 20]}],
            ['small', {dimensions: [10, 10]}],
          ],
        },
      ],
    },
    'ceiling.height': 2,
  };

  module.exports = houseForSale;