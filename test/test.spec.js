const chai = require('chai');
const rp = require('request-promise');

const transactionData = require('../src/data');

chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:4000/transactions`,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body. 
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe('Transactions Service', () => {
  describe('/transactions', () => {
    context('it returns a list of transactions', () => {
      it('should return a 200 statusCode', async () => {
        const response = await request('/transactions');
        response.statusCode.should.equal(200);
      });
      it('should return an array of transactions', async () => {
        const response = await request('/transactions');
        response.body.should.eql(transactionData);
      });
    });
  });
});
